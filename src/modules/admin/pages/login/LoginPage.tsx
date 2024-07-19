import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../../components/LoginForm';
import { useActions } from '@/shared/hooks/redux';
import { accountActions } from '@/store/slices/AccountSlice';

const LoginPage = () => {
  const { setAccount } = useActions(accountActions);
  const handleClick = (login: string, password: string) => {
    console.log('login');
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login, password)
      .then(({ user }) => {
        console.log({ user });
        setAccount({
          id: user.uid,
          email: user.email,
          token: user.accessToken,
        });
      })
      .catch(console.error);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm handleClick={handleClick} />
    </div>
  );
};

export default LoginPage;
