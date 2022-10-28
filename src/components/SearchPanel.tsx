import { createTheme, IconButton, TextField, ThemeProvider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchPanel = () => {
  const [ search, setSearch ] = useState('')
  
  return (
    <div className='flex justify-center'>
      <input
          type = 'text'
          className='border py-2 px-2 h-[42px] mb-2 mt-[60px] w-[80%] bg-gray-700 bg-opacity-60'
          placeholder='Search...'
          value={search}
          onChange = { e => setSearch(e.target.value) }
        />
    </div>
  )
}

export default SearchPanel