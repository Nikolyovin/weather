import { Divider } from '@mui/material'
import React from 'react'
import BasicQueriesPanel from './BasicQueriesPanel'
import SearchPanel from './SearchPanel'
import WeatherDetails from './WeatherDetails'

const SideBar = () => {
  return (
    <div className = 'w-[25%] h-[100%] bg-gray-700 bg-opacity-60' >
      {/* <SearchPanel/> */}
      <Divider sx = {{borderColor: '#9e9e9e', pt: 10}} variant='middle' />
      <BasicQueriesPanel/>
      <Divider sx = {{borderColor: '#9e9e9e',}} variant='middle' />
      <WeatherDetails/>
      <Divider sx = {{borderColor: '#9e9e9e',}} variant='middle' />
    </div>
  )
}

export default SideBar