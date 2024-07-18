//import PropTypes from "prop-types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LoginForm from "../../components/LoginForm";
import { useActions } from "@/shared/hooks/redux";
import { accountActions } from "@/store/slices/AccountSlice";

const RegisterPage = () => {
  const { setAccount } = useActions(accountActions);
  const handleClick = (login: string, password: string) => {
    const auth = getAuth();
    console.log({});

    createUserWithEmailAndPassword(auth, login, password)
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
      <h1>Register Page</h1>
      <LoginForm handleClick={handleClick} />
    </div>
  );
};

//LoginPage.propTypes = {};

export default RegisterPage;
