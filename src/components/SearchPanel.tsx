import { IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchPanel = () => {
  return (
    <div className='flex '>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          style={{marginTop: '20px', flex: 1}}
        />
        <IconButton color="secondary" aria-label="add an alarm">
            <SearchIcon />
        </IconButton>
    </div>
  )
}

export default SearchPanel