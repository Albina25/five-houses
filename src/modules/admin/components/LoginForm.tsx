import React, { useState } from 'react';

interface LoginFormProps {
  handleClick: (login: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleClick }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleClick(login, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder="Login"
      ></input>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      ></input>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
