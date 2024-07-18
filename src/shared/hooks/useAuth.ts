import { useAppSelector } from "./redux";

export function useAuth() {
  const { id, email } = useAppSelector((state) => state.accountReducer.account);

  return {
    isAuth: !!id,
    email,
  };
}
