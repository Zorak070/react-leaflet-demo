//Shows localjson data 

import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'
import * as parks from './JSON data/park.json';
import './App.css';

const skateImg = new Icon({
  iconUrl: "/skate.jpeg",
  iconSize: [25, 25]
})

function App() {

  const [activePark, setActivePark] = useState(null);

  return (
    <Map center={[45.42132, -75.697189]} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {parks.features.map(park =>
        <Marker key={park.properties.PARK_ID} onclick={() => { setActivePark(park) }}
          position={[park.geometry.coordinates[1], park.geometry.coordinates[0]]} icon={skateImg} />
      )}
      {activePark && <Popup onClose={() => setActivePark(null)}
        position={[activePark.geometry.coordinates[1], activePark.geometry.coordinates[0]]} >
        <h2>{activePark.properties.NAME}</h2>
        <h3>{activePark.properties.DESCRIPTIO}</h3>
      </Popup>}
    </Map>
  );
}

export default App;