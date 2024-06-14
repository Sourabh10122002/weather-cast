import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './MapDisplay.css';

const MapDisplay = ({ location }) => {
    const { lat, lon } = location;
    return (
        <div className='map-full-container'>
            <MapContainer center={[lat, lon]} zoom={13} className='map-show'>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {lat && lon && <Marker position={[lat, lon]} ></Marker>}
            </MapContainer>
        </div>
    )
}

export default MapDisplay