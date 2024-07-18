import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "@/store/slices/OrderSlice";
import { orderApi } from "@/shared/services/OrderServices";

const rootReducer = combineReducers({
  orderReducer,
  [orderApi.reducerPath]: orderApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(orderApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
