import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
    reducerPath: "weather/api",                        //reducerPath по какому адресу в сторе хранятся закэшированные данные когда мы будем работать с апи
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.openweathermap.org/"
    }),
    refetchOnFocus: true,                              // настраивается в трех местах ищи по поиску
    // query нужен для запросов. первый  указывает какой тип мы получаем с сервера, второй какой параметр мы хотим принимать чтобы осуществить данный запрос
    endpoints: build => {
        searchCity: build.query<any, any>({
            query: (search:  string) => ({
                url: `/data/2.5/weather?lat=44.34&lon=10.99&appid=e0fed32aec7d12b4a0fd004d62f97459`,
            })
        })
    }
})