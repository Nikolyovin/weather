import CardWeather from "./components/CardWeather";
import SideBar from "./components/SideBar";
import { useSearchCityQuery } from "./store/weather/weather.api";


function App() {
  const { isLoading, isError, data: weather } = useSearchCityQuery([55.75, 37.63]) // обновляет данные, если после долгого промежутка возращаемся, но нужно настроить в сторе
  console.log('weather', weather);

  return (
    <div className="w-[100%] h-[100vh] flex">
      {/* <img 
        className="absolute w-[100%] h-[100%] z-[-1] object-cover" 
        src="https://img05.rl0.ru/afisha/-x-i/daily.afisha.ru/uploads/images/c/fe/cfe8021fb9d9a3712bc790645f302f0e.png" 
        alt="background"
      /> */}
      <img 
        className="absolute w-[100%] h-[100%] z-[-1]" 
        src="https://img08.rl0.ru/afisha/-x-i/daily.afisha.ru/uploads/images/c/5a/c5a5cc67ec24d29b522f1ef365307fd0.png" 
        alt="background"
      />
      <div className="flex flex-col flex-1 lex-col z-[100] h-[100%] pl-[150px] pb-[150px] pt-[50px]">
        <span className="flex-1 font-serif text-xl text-white">the.weather</span>
        { isLoading && <p className='text-center'> Loading...</p> }
        { weather && <CardWeather />}
      </div>
      <SideBar/>
    </div>
  );
}

export default App;
