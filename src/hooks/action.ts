import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { weatherActions } from "../store/weather/weather.slice";

const actions = {
    ...weatherActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch) //нужно для экшенов
}