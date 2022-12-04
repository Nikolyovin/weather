import { CitiesType } from './models/models'

export const cities: Array<CitiesType> = [
    {
        className: 'basicQueriesPanel-item cursor-pointer hover:text-gray-400',
        classNameActive: 'basicQueriesPanel-item font-bold text-white italic cursor-pointer hover:text-gray-400 ',
        title: 'Ryazan',
        coordinates: [54.63, 39.69],
        img: 'https://img05.rl0.ru/afisha/-x-i/daily.afisha.ru/uploads/images/c/fe/cfe8021fb9d9a3712bc790645f302f0e.png'
    },
    {
        className: 'basicQueriesPanel-item cursor-pointer hover:text-gray-400',
        classNameActive: 'basicQueriesPanel-item font-bold italic text-white cursor-pointer hover:text-gray-400 ',
        title: 'Moscow',
        coordinates: [55.75, 37.62],
        img: 'https://media.2x2tv.ru/content/images/2022/04/5----.jpg'
    },
    {
        className: 'basicQueriesPanel-item cursor-pointer hover:text-gray-400',
        classNameActive: 'basicQueriesPanel-item font-bold text-white italic cursor-pointer hover:text-gray-400 ',
        title: 'Omsk',
        coordinates: [54.99, 73.37],
        img: 'https://phonoteka.org/uploads/posts/2022-09/1663588913_1-phonoteka-org-p-kiberpank-rossiya-art-vkontakte-1.jpg'
    },
    {
        className: 'basicQueriesPanel-item cursor-pointer hover:text-gray-400',
        classNameActive: 'basicQueriesPanel-item font-bold text-white italic cursor-pointer hover:text-gray-400 ',
        title: 'Novosibirsk',
        coordinates: [55.04, 82.93],
        img: 'https://i.pinimg.com/originals/a2/2b/ce/a22bcef333d6ce019a34288ac743e6c6.jpg'
    },
    {
        className: 'basicQueriesPanel-item cursor-pointer hover:text-gray-400',
        classNameActive: 'basicQueriesPanel-item font-bold text-white italic cursor-pointer hover:text-gray-400 ',
        title: 'Vladivostok',
        coordinates: [43.11, 131.87],
        img: 'https://img08.rl0.ru/afisha/-x-i/daily.afisha.ru/uploads/images/c/5a/c5a5cc67ec24d29b522f1ef365307fd0.png'
    },
    {
        className: 'basicQueriesPanel-item cursor-pointer hover:text-gray-400',
        classNameActive: 'basicQueriesPanel-item font-bold text-white italic cursor-pointer hover:text-gray-400 ',
        title: 'Irkutsk',
        coordinates: [52.3, 104.3],
        img: 'https://ambivert.club/wp-content/uploads/2020/12/jxzrGzESaJI-1536x865.jpg'
    }
]

export const defaultActive = 'Ryazan'

export let typeCodeWeather = new Map([
    [0, 'Clear sky'],
    [1, 'Mainly clear'],
    [2, 'Partly cloudy'],
    [3, 'Overcast'],
    [45, 'Fog'],
    [48, 'Depositing rime fog'],
    [51, 'Light drizzle'],
    [53, 'Moderate drizzle'],
    [55, 'Heavy drizzle'],
    [56, 'Light freezing drizzle '],
    [57, 'Dense freezing drizzle'],
    [61, 'Slight rain'],
    [63, 'Moderate rain'],
    [65, 'Heavy rain'],
    [66, 'Light freezing rain'],
    [67, 'Heavy freezing rain'],
    [71, 'Slight snow fall'],
    [73, 'Moderate snow fall'],
    [75, 'Heavy snow fall'],
    [77, 'Snow grains'],
    [80, 'Slight rain showers'],
    [81, 'Moderate rain showers'],
    [82, 'Heavy rain showers'],
    [85, 'Slight snow showers'],
    [86, 'Heavy snow showers'],
    [95, 'Thunderstorm: slight or moderate'],
    [96, 'Thunderstorm with slight hail'],
    [99, 'Thunderstorm with heavy hail']
])

export const defaultCoordinates: number[] = [54.63, 39.69] //Ryazan
