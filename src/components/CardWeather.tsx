import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import { grey, pink } from '@mui/material/colors';

const CardWeather = () => {
  return (
    <div className="flex items-center">
        <span className="text-[94px] font-sans text-white mr-2" >05°</span>
        <div className="flex flex-col items-center justify-center mr-4">
            <span className="text-5xl text-white font-serif">Moscow</span>
            <span className="text-white font-serif">06:09-Sunday, 6 Oct'22</span>
        </div>
          <CloudOutlinedIcon  sx={{ color: grey[100], fontSize: 60, }}/>
    </div>
  )
}

export default CardWeather