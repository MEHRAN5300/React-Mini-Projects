import { useState } from "react";
import "./weatherApp.css";

const weatherApp = () => {


  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  

  const current = weatherData?.current;
  const forecast = weatherData?.forecast;
  const location = weatherData?.location;

  const [tempToggle, setTempToggle] = useState('C');


  const searchWeather = async () =>{
    if(city.trim() === ''){
        return;
    }
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?Key=64c410de78604fa0b7d154733260810&q=${encodeURIComponent(city)}&days=3`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new console.error('Weather Request fail');
    }

    const data = await response.json();
    setWeatherData(data);
    console.log(data);

  }

  const formatedDate = (unformatedDate, formate) => {
    const date = new Date(unformatedDate);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true // 12-hour format (AM/PM) ke liye
    };

    return new Intl.DateTimeFormat(formate, options).format(date);
  }


  return (
    <div className="weather-page">
      <div className="weather-container">
        <div className="weather-topbar">
          <div>
            <p className="weather-label">Weather Forecast</p>
            <h1>Weather App</h1>
          </div>

          <div className="temp-toggle">
            <button className={`toggle-btn ${tempToggle == 'C' ? 'active' : ''}`} onClick={()=>setTempToggle('C')}>°C</button>
            <button className={`toggle-btn ${tempToggle == 'F' ? 'active' : ''}`} onClick={()=>setTempToggle('F')}>°F</button>
          </div>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search city e.g. Karachi"
            className="search-input"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
          <button className="search-btn" onClick={()=>{searchWeather()}}>Search</button>
        </div>

        <div className="weather-main-grid">
          <div className="current-weather-card">
            <div className="current-weather-top">
              <div>
                <p className="city-name">{location?.name ? location?.name : 'City'}, {location?.country ? location?.country : 'Country'}</p>
                <p className="date-text">{ location?.localtime ? formatedDate(location?.localtime, 'en-US') : '' }</p>
              </div>

              <div className="weather-icon-large">{ current?.condition?.icon ? <img Style="background: white;" src={`https:${weatherData?.current?.condition?.icon}`} alt='Weather Icon' /> : "☀️" }</div>
            </div>

            <div className="temperature-row">
              <h2>{ tempToggle == 'C' ? current?.temp_c : current?.temp_f } {tempToggle === 'C' ? '°C' : '°F' }</h2>
              <div className="weather-desc">
                <p>Sunny</p>
                <span>Feels like { tempToggle == 'C' ? current?.feelslike_c : current?.feelslike_f }{tempToggle === 'C' ? '°C' : '°F' }</span>
              </div>
            </div>

            <div className="extra-info-grid">
              <div className="info-box">
                <span>💧 Humidity</span>
                <strong>{ current?.humidity ? current?.humidity : '--' } %</strong>
              </div>

              <div className="info-box">
                <span>🌬 Wind</span>
                <strong>{ current?.wind_kph ? current?.wind_kph : '--' } Km/h</strong>
              </div>

              <div className="info-box">
                <span>👁 Visibility</span>
                <strong>{ current?.vis_km ? current?.vis_km : '--' } km</strong>
              </div>

              <div className="info-box">
                <span>☀ UV Index</span>
                <strong>{ current?.uv ? current?.uv : '-' }</strong>
              </div>
            </div>
          </div>

          <div className="side-cards">
            <div className="side-card">
              <h3>Sunrise & Sunset</h3>
              <div className="sun-times">
                <div className="sun-box">
                  <span>🌅 Sunrise</span>
                  <strong>{ forecast?.forecastday[0]?.astro?.sunrise ? forecast?.forecastday[0]?.astro?.sunrise : '-' }</strong>
                </div>
                <div className="sun-box">
                  <span>🌇 Sunset</span>
                  <strong>{ forecast?.forecastday[0]?.astro?.sunset ? forecast?.forecastday[0]?.astro?.sunset : '-' }</strong>
                </div>
              </div>
            </div>

            <div className="side-card">
              <h3>Air Quality</h3>
              <div className="air-quality">
                <div className="aqi-number">Null</div>
                <div>
                  <p>Moderate</p>
                  <span>Air quality is acceptable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="forecast-sections">
          <div className="forecast-card">
            <div className="section-head">
              <h3>Hourly Forecast</h3>
              <span>Today</span>
            </div>

            <div className="hourly-forecast">
              <div className="hour-card">
                <p>09 AM</p>
                <div>☀️</div>
                <strong>30 {tempToggle === 'C' ? '°C' : '°F' }</strong>
              </div>

              <div className="hour-card active">
                <p>12 PM</p>
                <div>🌤️</div>
                <strong>32 {tempToggle === 'C' ? '°C' : '°F' }</strong>
              </div>

              <div className="hour-card">
                <p>03 PM</p>
                <div>☀️</div>
                <strong>33 {tempToggle === 'C' ? '°C' : '°F' }</strong>
              </div>

              <div className="hour-card">
                <p>06 PM</p>
                <div>🌥️</div>
                <strong>29 {tempToggle === 'C' ? '°C' : '°F' }</strong>
              </div>

              <div className="hour-card">
                <p>09 PM</p>
                <div>🌙</div>
                <strong>26{tempToggle === 'C' ? '°C' : '°F' }</strong>
              </div>
            </div>
          </div>

          <div className="forecast-card">
            <div className="section-head">
              <h3>7-Day Forecast</h3>
              <span>This Week</span>
            </div>

            <div className="weekly-forecast">
              <div className="day-row">
                <div className="day-left">
                  <span>Tuesday</span>
                </div>
                <div className="day-center">☀️ Sunny</div>
                <div className="day-right">32° / 25°</div>
              </div>

              <div className="day-row">
                <div className="day-left">
                  <span>Wednesday</span>
                </div>
                <div className="day-center">🌤️ Partly Cloudy</div>
                <div className="day-right">31° / 24°</div>
              </div>

              <div className="day-row">
                <div className="day-left">
                  <span>Thursday</span>
                </div>
                <div className="day-center">⛅ Cloudy</div>
                <div className="day-right">30° / 23°</div>
              </div>

              <div className="day-row">
                <div className="day-left">
                  <span>Friday</span>
                </div>
                <div className="day-center">🌦️ Rain</div>
                <div className="day-right">28° / 22°</div>
              </div>

              <div className="day-row">
                <div className="day-left">
                  <span>Saturday</span>
                </div>
                <div className="day-center">🌩️ Storm</div>
                <div className="day-right">27° / 21°</div>
              </div>

              <div className="day-row">
                <div className="day-left">
                  <span>Sunday</span>
                </div>
                <div className="day-center">🌥️ Cloudy</div>
                <div className="day-right">29° / 22°</div>
              </div>

              <div className="day-row">
                <div className="day-left">
                  <span>Monday</span>
                </div>
                <div className="day-center">☀️ Sunny</div>
                <div className="day-right">33° / 24°</div>
              </div>
            </div>
          </div>
        </div>

        <p className="bottom-note">
          Build the functionality yourself using React state and weather API ✨
        </p>
      </div>
    </div>
  );
};

export default weatherApp;