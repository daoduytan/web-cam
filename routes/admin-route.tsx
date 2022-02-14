import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Loading } from '../components';
import { useAuth } from '../context/auth-context';

interface Props {
  children: JSX.Element;
}
const AdminRoute = ({ children }: Props) => {
  const router = useRouter();
  const { loading, isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      router.replace('/admin/login');
    }
  }, [isAuth, router]);

  if (loading) {
    return <Loading />;
  }

  return children;
};

export { AdminRoute };
