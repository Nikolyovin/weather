import { useState, useEffect } from 'react'
import CardWeather from './components/CardWeather'
import SideBar from './components/SideBar'
import { useSearchCityQuery } from './store/weather/weather.api'
import CircularProgress from '@mui/material/CircularProgress'
import { useAppSelector } from './hooks/redux'
import { cities } from './helpers'

function App() {
    const { activeCoordinates } = useAppSelector(state => state.weather)
    const { isLoading, isError, data: weather } = useSearchCityQuery(activeCoordinates)

    if (isLoading) return <CircularProgress />
    console.log('activeCoordinates:', activeCoordinates)
    const cover: string =
        cities.find(city => JSON.stringify(city.coordinates) === JSON.stringify(activeCoordinates))?.img ??
        'https://img05.rl0.ru/afisha/-x-i/daily.afisha.ru/uploads/images/c/fe/cfe8021fb9d9a3712bc790645f302f0e.png'

    return (
        <div className='w-[100%] h-[100vh] flex'>
            {/* <img
                className='absolute w-[100%] h-[100%] z-[-1] object-cover'
                src='https://img05.rl0.ru/afisha/-x-i/daily.afisha.ru/uploads/images/c/fe/cfe8021fb9d9a3712bc790645f302f0e.png'
                alt='background'
            /> */}
            {/* <img
                className='absolute w-[100%] h-[100%] z-[-1]'
                src='https://img08.rl0.ru/afisha/-x-i/daily.afisha.ru/uploads/images/c/5a/c5a5cc67ec24d29b522f1ef365307fd0.png'
                alt='background'
            /> */}
            {!isLoading && <img className='absolute w-[100%] h-[100%] z-[-1]' src={cover} alt='background' />}
            <div className='flex flex-col flex-1 lex-col z-[100] h-[100%] pl-[150px] pb-[150px] pt-[50px] max-2xl:pb-[50px] max-2xl:pl-[75px]'>
                <span className='flex-1 font-serif text-xl text-white'>the.weather</span>
                {isLoading && <CircularProgress />}
                {weather && <CardWeather weather={weather} activeCoordinates={activeCoordinates} />}
            </div>
            <SideBar />
        </div>
    )
}

export default App
