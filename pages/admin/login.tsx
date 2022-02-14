import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../context/auth-context';
import { FormLogin } from '../../page-component';

const Login: NextPage = () => {
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.replace('/admin');
    }
  }, [isAuth, router]);

  return (
    <div className="flex min-h-screen bg-pink-100 justify-center items-center">
      <FormLogin />
    </div>
  );
};

export default Login;
