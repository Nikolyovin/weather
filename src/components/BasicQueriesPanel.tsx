import { cities } from "../helpers";
import { useActions } from "../hooks/action"
import { useAppSelector } from "../hooks/redux"

const BasicQueriesPanel: React.FC = () => {

  const { activeCoordinates:coor } = useAppSelector( state => state.weather)
  console.log('coor:', coor);

  



  const { activeCoordinates } = useActions()
  const onActiveCity = () => {
    activeCoordinates([46.35, 48.04])
  }

  return (
    <div className="flex flex-col py-16 px-12">
        {/* <span className="basicQueriesPanel-item cursor-pointer hover:text-gray-400" onClick={ onActiveCity }>Ryazan</span>
        <span className="basicQueriesPanel-item">Omsk</span>
        <span className="basicQueriesPanel-item">Novosibirsk</span>
        <span className="basicQueriesPanel-item">Vladivostok</span>
        <span className="basicQueriesPanel-item">Irkutsk</span>
        <span className="basicQueriesPanel-item">Moscow</span> */}
        {
          cities.map( city => <span className = { city.classname }>{ city.title }</span>)
        }
    </div>
  )
}

export default BasicQueriesPanel