import { useState } from 'react'
import { cities, defaultActive } from '../helpers'
import { useActions } from '../hooks/action'
import { useAppSelector } from '../hooks/redux'

const BasicQueriesPanel: React.FC = () => {
    const { activeCoordinates } = useActions()

    const [active, setActive] = useState<string>(defaultActive)

    return (
        <div className='flex flex-col py-16 px-12 max-2xl:py-6 max-2xl:px-4'>
            {cities.map(city => (
                <span
                    key={city.title}
                    className={active !== city.title ? city.className : city.classNameActive}
                    onClick={() => activeCoordinates(city.coordinates) && setActive(city.title)}
                >
                    {city.title}
                </span>
            ))}
        </div>
    )
}

export default BasicQueriesPanel
