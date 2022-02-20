import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../../context/auth-context';
import get from 'lodash/get';

interface Inputs {
  username: string;
  password: string;
}

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { setAuth } = useAuth();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    const loginResponse = await response.json();

    const token = get(loginResponse, 'user.token');

    sessionStorage.setItem('token', token);

    setAuth(loginResponse.user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="mb-2">
        <input
          placeholder="Tên đăng nhập"
          className="border rounded px-4 py-2"
          {...register('username')}
        />
      </fieldset>
      <fieldset className="mb-2">
        <input
          type="password"
          placeholder="Mật khẩu"
          className="border rounded px-4 py-2"
          {...register('password')}
        />
      </fieldset>
      <fieldset>
        <button
          className="bg-blue-500 text-white hover:bg-blue-400 block w-full border rounded py-2 px-4"
          type="submit"
        >
          Đăng nhập
        </button>
      </fieldset>
    </form>
  );
};

export { FormLogin };
