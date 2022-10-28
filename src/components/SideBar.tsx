import React from 'react'
import BasicQueriesPanel from './BasicQueriesPanel'
import SearchPanel from './SearchPanel'

const SideBar = () => {
  return (
    <div className = 'w-[25%] h-[100%] bg-gray-700 bg-opacity-60' >
      <SearchPanel/>
      <BasicQueriesPanel/>
    </div>
  )
}

export default SideBar