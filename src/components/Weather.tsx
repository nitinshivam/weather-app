import { useEffect, useState } from "react";
import Loading from "./Loading";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface WeatherProps {
  loc: string;
}

interface Data {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    wind_kph: number;
    humidity: number;
  };
}

const Weather = ({ loc }: WeatherProps) => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading,setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  console.log(loc);
  

  useEffect(() => {
    const weatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${loc}`
        );
        const result = await response.json();

        console.log(response);
        if(response.ok){
          setData(result);
          setIsLoading(false);
        }else{
          toast.error(result.error.message);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    weatherData();
    setIsLoading(true);
  }, [loc]);

  if(isLoading) return (
  <>
  <ToastContainer />
  <Loading/>
  </>
  
  )
  return (
    data && (
      <div className="w-full h-full flex flex-col items-center text-white gap-y-3">
        <img src="cloudy.png" alt="weather" className="w-32 h-32" />
        <span className="text-7xl">{data.current.temp_c}°C</span>
        <span className="text-4xl">{data.location.name}</span>
        <div className="flex justify-around items-center w-full mt-8">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <img src="humidity.svg" alt="" className="h-8 w-8" />
              <span className="text-2xl">{data.current.humidity}%</span>
            </div>
            <span className="ml-[2.6rem]">Humidity</span>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <img src="wind.svg" alt="" className="h-8 w-8" />
              <span className="text-2xl">{data.current.wind_kph} km/h</span>
            </div>
            <span className="ml-[2.6rem]">Wind Speed</span>
          </div>
        </div>
      </div>
    )
  );
};
export default Weather;
