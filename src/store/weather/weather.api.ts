import { createApi, fetchBaseQuery,  } from '@reduxjs/toolkit/query/react'
import { CurrentWeather, ServerResponse } from '../../models/models'


export const weatherApi = createApi({
    reducerPath: "weather/api",                        //reducerPath по какому адресу в сторе хранятся закэшированные данные когда мы будем работать с апи
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.open-meteo.com"
    }),
    refetchOnFocus: true,                              // настраивается в трех местах ищи по поиску
    // query нужен для запросов. первый  указывает какой тип мы получаем с сервера, второй какой параметр мы хотим принимать чтобы осуществить данный запрос
    endpoints: build => ({
        searchCity: build.query<CurrentWeather, number[]>({
            query: (coordinates: number[]) => ({
                url: `v1/forecast?latitude=${coordinates[0]}&longitude=${coordinates[1]}&current_weather=true`, 
            }),
            transformResponse: (response: ServerResponse) => response.current_weather                       //для трансформации ответа
        })
    })
})

export const { useSearchCityQuery } = weatherApi