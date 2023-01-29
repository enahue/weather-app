import React from 'react'
import "./styles/WeatherCard.css"
import { FaExchangeAlt } from 'react-icons/fa';


const WeatherCard = ({weather, temps, isCelcius, changeUnitTemp}) => {
  return (
<section className='weatherCard'>
<h2 className='weather-card-place'>{weather?.name}, {weather?.sys.country}</h2>
<div className='weather-card-info'>
<div className='weather-card-img'>
  <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
</div>
<h3>{isCelcius ? temps?.celsius + "ºC" : temps?.fahrenheit+"ºF"} </h3>
</div>
<ul className='weatherCard__list'>
  <li className='weather-card-description'>{weather?.weather[0].main}, {weather?.weather[0].description}</li>
  <li><span>Wind Speed: </span> {weather?.wind.speed} m/sec</li>
  <li><span>Clouds: </span> {weather?.clouds.all} %</li>
  <li><span>Pressure: </span> {weather?.main.pressure} hPa</li>
</ul>
<button className='weatherCard__btn' onClick={changeUnitTemp}> &deg;C   <FaExchangeAlt className='icon-change' />  &deg;F </button>
</section>
  )
}

export default WeatherCard
