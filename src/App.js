import { useState } from 'react';
import MapDisplay from './Components/MapDisplay';
import './App.css';
import WeatherDisplay from './Components/WeatherDisplay';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('metric');
  const [location, setLocation] = useState({ lat: 0, lon: 0 });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (latitude && longitude) {
      setLocation({ lat: parseFloat(latitude), lon: parseFloat(longitude) });
    } else {
      alert('Latitude and Longitude cannot be empty');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Latitude</label>
            <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Longitude</label>
            <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} required /> </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Unit</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="metric">Celsius</option>
              <option value="imperial">Fahrenheit</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <MapDisplay location={location} unit={unit} />
      <WeatherDisplay location={location} unit={unit} setLatitude={setLatitude} setLongitude={setLongitude} setLocation={setLocation} />
    </div>
  );
}

export default App;
