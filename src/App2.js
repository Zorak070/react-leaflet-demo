//Shows remote data from an api
import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {

    const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2020-05";
    const { data, error } = useSWR(url, fetcher);
    const crimes = data && !error ? data.slice(100, 150) : [];

    return (
        <Map center={[52.63, -1.134231]} zoom={14}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {crimes.map(crime =>
                <Marker position={[crime.location.latitude, crime.location.longitude]} >
                    <Popup>
                        <h3>{crime.category.toUpperCase()}</h3>
                        <h4>{crime.location.street.name}</h4>
                    </Popup>
                </Marker>
            )}
        </Map>
    );
}

export default App;