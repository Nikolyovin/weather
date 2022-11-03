import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import { grey, pink } from '@mui/material/colors';
import { CurrentWeather } from '../models/models';
import moment from 'moment';
import 'moment/locale/en-gb'

type CardWeatherProps = {
  weather: CurrentWeather
}

const CardWeather: React.FC<CardWeatherProps> = ({ weather }) => {
  console.log('weather:', weather);
  const {temperature, time, weathercode} = weather     

  return (
    <div className="flex items-center">
        <span className="text-[94px] font-sans text-white mr-2" >{temperature}</span> 
        <div className="flex flex-col items-center justify-center mr-4">
            <span className="text-5xl text-white font-serif">Moscow</span>
            <span className="text-white font-serif">{ moment(time).locale('ru').format('llll') }</span>
        </div> 
          <CloudOutlinedIcon  sx={{ color: grey[100], fontSize: 60, }}/>
    </div>
  )
}

export default CardWeather