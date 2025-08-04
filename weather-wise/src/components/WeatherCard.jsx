import React from 'react'
import WeatherCloud from '../assets/weather-cloudy.png'


const WeatherCard = ({weatherDetails}) => {

  console.log(weatherDetails);
  // const firstForecast = weatherDetails.list[0]; 
  // const tempKelvin = firstForecast.main.temprature;

  // const tempCelsius = (tempKelvin - 273.15).toFixed(2);

  // const humidity = firstForecast.main.humidity;
  // const humidityUnit = firstForecast.main.humidity_unit;

  // const cloudiness = firstForecast.clouds.cloudiness;
  // const cloudUnit = firstForecast.clouds.unit;

  // const locationName = weatherDetails.city.name;
  // const locationCountry = weatherDetails.city.country;

  // const latitude = weatherDetails.city.coord.lat;
  // const longitude = weatherDetails.city.coord.lon;


  const tempCelsius = 35.05;

  const humidity = 40;
  const humidityUnit = '%;'

  const cloudiness = 60;
  const cloudUnit = '%';

  const locationName = 'Bhopal';
  const locationCountry = 'IN';

  const latitude = 83.832234;
  const longitude = 83.832234;

  return (
    <div className="weather-section">
      <div className="weather-card">
        <div className="weather-temp-c">
          {tempCelsius} <sup>o</sup> <span>C</span>
        </div>
        <div className="weather-info">
        <span>
            <p>{`Humidity: ${humidity}${humidityUnit} `}</p>
            <p>{`Cloudiness: ${cloudiness}${cloudUnit}`}</p>
            
        </span>

          <div className="weather-place">
            <p>Lat - <span className='specialfont'>{`${latitude} `}</span></p>
            <p>Lon- <span className='specialfont'>{`${longitude} `}</span></p>
            <p><span className='specialfont'>{`${locationName}, ${locationCountry}`}</span></p>
          </div>
          <div className="weather-avatar">
            <img src={WeatherCloud} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
