import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector;
