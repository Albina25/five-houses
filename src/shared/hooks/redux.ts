import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = (actions: ActionCreatorsMapObject) => {
  const dispatch = useDispatch<AppDispatch>();
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};
