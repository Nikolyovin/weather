import React from 'react'

const WeatherDetails: React.FC = () => {
  return (
    <div className="flex flex-col py-16 px-12">
        <span className="text-gray-100 text-lg mb-3">Weather Details</span>
        <div className='flex flex-col pt-5 '>
            <div className='flex justify-between mb-3'>
                <span className="text-gray-400 text-lg ">Cloudy</span>
                <span className="text-gray-100 text-lg ">86%</span>
            </div>
            <div className='flex justify-between mb-3'>
                <span className="text-gray-400 text-lg ">Humidity</span>
                <span className="text-gray-100 text-lg ">62%</span>
            </div>
            <div className='flex justify-between mb-3'>
                <span className="text-gray-400 text-lg ">Wind</span>
                <span className="text-gray-100 text-lg ">8km/h</span>
            </div>
            <div className='flex justify-between mb-3'>
                <span className="text-gray-400 text-lg ">Rain</span>
                <span className="text-gray-100 text-lg ">8mm</span>
            </div>

        </div>
    </div>
  )
}

export default WeatherDetails