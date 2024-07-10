import React, { useState, useEffect, useCallback } from 'react';
import styles from '../HomeCSS/Temperatures.module.css';
import { database } from "../Firebase/Firebase";
import { ref, onValue } from 'firebase/database';

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '5e5cb14ad2c45b7c41e011b4a367c447'; // Replace with your OpenWeatherMap API key

  const fetchWeatherData = useCallback(() => {
    if (city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      fetch(url)
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch(error => console.error('Error fetching weather data:', error));
    }
  }, [city, apiKey]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData, city]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    fetchWeatherData();
  };

  return (
    <>
    <br></br>
    <div className={styles.weatherComponent}>
      <h2>Outside Weather</h2>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className={styles.input}
        />
        <button onClick={handleSearch} className={styles.button}>Search</button>
      </div>
      {weatherData ? (
        <>
          <h3>Weather in {weatherData.name}</h3>
          <p>Temperature: {weatherData.main?.temp}°C</p>
          <p>Humidity: {weatherData.main?.humidity}%</p>
          {weatherData.weather && weatherData.weather.length > 0 && (
            <>
              <p>Condition: {weatherData.weather[0]?.description}</p>
              {weatherData.weather[0]?.icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt={weatherData.weather[0].description}
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              )}
            </>
          )}
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
    </>
  );
};

const SensorData = () => {
  const [sensorData, setSensorData] = useState({ temperature: 0, humidity: 0 });

  useEffect(() => {
    const sensorRef = ref(database, 'sensor_data');
    onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSensorData(data);
      }
    });
  }, []);

  return (
 
    <div className={styles.firebaseComponent}>
      <div className={styles.data}>
        <h2>Room Weather</h2>
        <p>Temperature: {sensorData.temperature}°C</p>
        <p>Humidity: {sensorData.humidity}%</p>
      </div>
    </div>
    
  );
};

const Temperature = () => {
  return (
    <div className={styles.temperaturePage}>
      <WeatherComponent />
      <SensorData />
    </div>
   
  );
};

export default Temperature;
