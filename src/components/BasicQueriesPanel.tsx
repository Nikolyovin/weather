import { cities } from '../helpers'
import { useActions } from '../hooks/action'
import { useAppSelector } from '../hooks/redux'

const BasicQueriesPanel: React.FC = () => {
    const { activeCoordinates } = useActions()

    return (
        <div className='flex flex-col py-16 px-12 max-2xl:py-6 max-2xl:px-4'>
            {/* <span className="basicQueriesPanel-item cursor-pointer hover:text-gray-400" onClick={ onActiveCity }>Ryazan</span>
        <span className="basicQueriesPanel-item">Omsk</span>
        <span className="basicQueriesPanel-item">Novosibirsk</span>
        <span className="basicQueriesPanel-item">Vladivostok</span>
        <span className="basicQueriesPanel-item">Irkutsk</span>
        <span className="basicQueriesPanel-item">Moscow</span> */}
            {cities.map(city => (
                <span key={city.title} className={city.className} onClick={() => activeCoordinates(city.coordinates)}>
                    {city.title}
                </span>
            ))}
        </div>
    )
}

export default BasicQueriesPanel
