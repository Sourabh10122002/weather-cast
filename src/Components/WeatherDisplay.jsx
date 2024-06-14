import React, { useState, useEffect } from 'react'

const WeatherDisplay = ({ location, unit }) => {
    const { lat, lon } = location;
    const [weatherData, setWeatherData] = useState(null);
    console.log(location)
    useEffect(() => {
        if (lat && lon) {
            const fetchWeatherData = async () => {
                const API_KEY = '4f52c3a77754b840ff980ea106ef3df6';
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`);
                const newResponse = await response.json();
                console.log(newResponse)
                setWeatherData(newResponse);
            };
            fetchWeatherData();
        }
    }, [lat, lon, unit]);


    return (
        < div className='weather-data-container' >
            {weatherData && (
                <div className="weather-data">
                    <h3>Weather Data</h3>
                    <p>Temperature: {weatherData.main.temp} {unit === 'metric' ? '°C' : '°F'}</p>
                    <p>Weather Type: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} km/h</p>
                    <p></p>
                </div>
            )
            }
        </ div>
    )
}

export default WeatherDisplay