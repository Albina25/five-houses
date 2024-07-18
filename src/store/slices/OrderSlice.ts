import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "@/shared/types/IOrder";

interface orderState {
  order: IOrder[];
  isLoading: boolean;
  error: string;
}

const initialState: orderState = {
  order: [],
  isLoading: false,
  error: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export const { reducer: orderReducer, actions: orderActions } = orderSlice;
