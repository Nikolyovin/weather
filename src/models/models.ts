export interface CurrentWeather {
    temperature: number
    windspeed: number
    winddirection: number
    weathercode: number
    time: string
}

export interface ServerResponse {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    current_weather: CurrentWeather
}

export type CitiesType = {
    className: string
    classNameActive: string
    title: string
    coordinates: number[]
    img: string
}
