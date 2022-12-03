import { CircularProgress } from '@mui/material'
import { typeCodeWeather } from '../helpers'
import { useAppSelector } from '../hooks/redux'
import { useSearchCityQuery } from '../store/weather/weather.api'

const WeatherDetails = () => {
    const { activeCoordinates } = useAppSelector(state => state.weather)
    const { isLoading, isError, data: weather } = useSearchCityQuery(activeCoordinates)

    if (isLoading) return <CircularProgress />

    let typeWeather: any = ''
    //for iterate Map
    for (let code of typeCodeWeather.keys()) {
        if (code == weather?.weathercode) {
            typeWeather = typeCodeWeather.get(code)
        }
    }

    return (
        <div className='flex flex-col py-16 px-12 max-2xl:px-6 max-2xl:py-4'>
            <span className='text-gray-100 text-lg mb-3'>Weather Details</span>
            <div className='flex flex-col pt-5 max-2xl:pt-2'>
                <div className='flex justify-between mb-3'>
                    <span className='text-gray-400 text-lg '>{typeWeather}</span>
                </div>
                <div className='flex justify-between mb-3'>
                    <span className='text-gray-400 text-lg '>Wind</span>
                    <span className='text-gray-100 text-lg '>{weather?.windspeed}km/h</span>
                </div>
                <div className='flex justify-between mb-3'>
                    <span className='text-gray-400 text-lg '>Winddirection</span>
                    <span className='text-gray-100 text-lg '>{weather?.winddirection}°</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails
