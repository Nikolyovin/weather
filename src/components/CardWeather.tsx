import { useEffect, useState } from 'react'
import { CurrentWeather } from '../models/models'
import moment from 'moment'
import 'moment/locale/en-gb'
import 'moment-timezone'
import { cities, defaultActive, defaultCoordinates } from '../helpers'
import IconWeather from './IconWeather'

type CardWeatherProps = {
    weather: CurrentWeather
    activeCoordinates: number[]
}

const CardWeather: React.FC<CardWeatherProps> = ({ weather, activeCoordinates = defaultCoordinates }) => {
    const [cityName, setCityName] = useState<string>()
    const { temperature, weathercode } = weather

    useEffect(() => {
        const cityName: string =
            cities.find(({ coordinates }) => coordinates === activeCoordinates)?.title ?? defaultActive
        setCityName(cityName)
    }, [activeCoordinates])

    return (
        <div className='flex items-center'>
            <span className='text-[94px] font-sans text-white mr-2'>{temperature}</span>
            <div className='flex flex-col items-center justify-center mr-4'>
                <span className='text-5xl text-white font-serif'>{cityName}</span>
                <span className='text-white font-serif'>
                    {moment().tz('Europe/Moscow').locale('ru').format('llll')}
                </span>
            </div>
            <IconWeather weathercode={weathercode} />
        </div>
    )
}

export default CardWeather
