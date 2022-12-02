import React, { FC } from 'react'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined'
import { grey } from '@mui/material/colors'
import LightModeIcon from '@mui/icons-material/LightMode'
import iconFog from '../../public/fog.png'
import iconDrizzle from '../../public/drizzle.png'
import iconRain from '../../public/rainy.png'
import iconFreezing from '../../public/freezing.png'
import iconSnow from '../../public/snow.png'
import iconThunderstorm from '../../public/thunderstorm.png'

interface IProps {
    weathercode: number
}

const IconWeather: FC<IProps> = ({ weathercode }) => {
    const stylesIcon = {
        color: grey[100],
        fontSize: 80
    }
    console.log('weathercode:', weathercode)

    const styleIconFilter = {
        filter: 'invert(100%) sepia(55%) saturate(161%) hue-rotate(297deg) brightness(116%) contrast(92%)',
        width: '80px',
        height: '80px'
    }

    const codeClearSky: number[] = [0, 1, 2, 3]
    const codeFog: number[] = [45, 48]
    const codeDrizzle: number[] = [51, 53, 55, 56, 57]
    const codeRain: number[] = [61, 63, 65, 80, 81, 82]
    const codeFreezing: number[] = [66, 67]
    const codeSnow: number[] = [71, 73, 75, 77, 85, 86]
    const codeThunderstorm: number[] = [95, 96, 99]

    const isClearSky: boolean = codeClearSky.includes(weathercode)
    const isFog: boolean = codeFog.includes(weathercode)
    const isDrizzle: boolean = codeDrizzle.includes(weathercode)
    const isRain: boolean = codeRain.includes(weathercode)
    const isFreezing: boolean = codeFreezing.includes(weathercode)
    const isSnow: boolean = codeSnow.includes(weathercode)
    const isThunderstorm: boolean = codeThunderstorm.includes(weathercode)

    return (
        <div>
            {isClearSky && <LightModeIcon sx={stylesIcon} />}
            {isFog && <img src={iconFog} style={styleIconFilter} alt='fog' />}
            {isDrizzle && <img src={iconDrizzle} style={styleIconFilter} alt='fog' />}
            {isRain && <img src={iconRain} style={styleIconFilter} alt='fog' />}
            {isFreezing && <img src={iconFreezing} style={styleIconFilter} alt='fog' />}
            {isSnow && <img src={iconFreezing} style={styleIconFilter} alt='fog' />}
            {isThunderstorm && <img src={iconFreezing} style={styleIconFilter} alt='fog' />}
        </div>
    )
}

export default IconWeather
