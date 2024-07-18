import { createSlice } from "@reduxjs/toolkit";
import { IAccount } from "@/shared/types/IAccount";

interface accountState {
  account: IAccount;
  isLoading: boolean;
  error: string;
}

const initialState: accountState = {
  account: {
    id: undefined,
    email: "",
    token: "",
  },
  isLoading: false,
  error: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount(state, action) {
      console.log({ state, action });

      state.account.id = action.payload.id;
      state.account.email = action.payload.id;
      state.account.token = action.payload.token;
    },
    removeAccount(state, action) {
      state.account.id = undefined;
      state.account.email = "";
      state.account.token = "";
    },
  },
});

export const { reducer: accountReducer, actions: accountActions } =
  accountSlice;
