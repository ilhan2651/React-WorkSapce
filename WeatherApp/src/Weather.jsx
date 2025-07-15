import React, { useState } from 'react'
import axios from 'axios'
import './css/Weather.css'

const API_KEY = "4e21d66b94dbdb04b56cc1e53f17aad9";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";



function Weather() {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const getWeather = async () => {
        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    q: city,
                    appid: API_KEY,
                    units: 'metric',
                    lang: 'tr'
                }
            });
            setWeather(response.data);
        } catch (error) {
            console.error("API hatası:", error);
            alert("Şehir bulunamadı veya API hatası.");
        }
    };

    return (
        <div className="weather-container">
            <h2>🌦️ Hava Durumu</h2>

            <div className="weather-form">
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="">Şehir Seçiniz</option>
                    <option value="Istanbul">İstanbul</option>
                    <option value="Ankara">Ankara</option>
                    <option value="Izmir">İzmir</option>
                    <option value="Bursa">Bursa</option>
                    <option value="Antalya">Antalya</option>
                </select>
                <button onClick={getWeather}>Getir</button>
            </div>

            {weather && (
                <div className="weather-info">
                    <h3>{weather.name}</h3>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                    />
                    <p>{weather.weather[0].description}</p>
                    <p>🌡️ Sıcaklık: {weather.main.temp} °C</p>
                    <p>💧 Nem: {weather.main.humidity}%</p>
                    <p>💨 Rüzgar: {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );


}

export default Weather