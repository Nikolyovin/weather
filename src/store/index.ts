import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { weatherApi } from "./weather/weather.api";
import { weatherReducer } from "./weather/weather.slice";

export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,   //регестрируем weatherApi это из файла weather.api.ts
        weather: weatherReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware)
})

setupListeners(store.dispatch)

//создаем чтобы знать с какими данными работать в стейте
export type RootState = ReturnType<typeof store.getState>