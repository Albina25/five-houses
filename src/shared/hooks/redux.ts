import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
