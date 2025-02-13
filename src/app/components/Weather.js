import React, { useState, useEffect } from "react";
import { WiThermometer, WiWindy, WiHumidity, WiCloudy } from "react-icons/wi";

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Dummy data simulating an API response
    const dummyData = {
      main: {
        temp: 22, // Temperature in Celsius
        humidity: 65, // Humidity in percentage
      },
      wind: {
        speed: 5, // Wind speed in m/s
      },
      weather: [
        {
          description: "clear sky", // Weather condition
        },
      ],
    };

    setWeatherData(dummyData);
  }, []);

  if (!weatherData) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const { main, wind, weather } = weatherData;
  const temperature = main.temp;
  const humidity = main.humidity;
  const windSpeed = wind.speed;
  const condition = weather[0].description;

  return (
    <div className="px-4">
        <p className="text-gray-700 text-start text-xl mt-4">condition</p>
      <div className="grid grid-cols-2 mt-4 gap-2">
        <div className="flex items-center text-blue-500 bg-blue-500 bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-500"><WiThermometer className="text-2xl text-white" /></span>  
          <div>
            <p className="text-lg font-semibold px-4">25</p>
          </div>
        </div>
        <div className="flex items-center text-blue-500 bg-blue-500 bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-500">  <WiWindy className="text-4xl text-white " /></span>
          <div>
            <p className="text-lg font-semibold px-4">35</p>
          </div>
        </div>
        <div className="flex items-center bg-blue-500 bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-500">  <WiHumidity className="text-4xl text-white" /> </span>
          <div>
            <p className="text-lg font-semibold text-blue-500 px-4">45</p>
          </div>
        </div>
        <div className="flex items-center bg-blue-500 bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-500">  <WiCloudy className="text-4xl text-white" /> </span>
          <div>
            <p className="text-lg font-semibold text-blue-500 mx-4">Good</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
