import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import mapboxgl from 'mapbox-gl';

function App() {
  const ref = useRef()
    const [params, setParams] = useState({
      lng: 5,
      lat: 34,
      zoom: 2
    })


  useEffect(() => {
    const map = new mapboxgl.Map({
      container: ref.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [params.lng, params.lat],
      zoom: params.zoom
      });

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <div ref={ref}></div>
        </a>
      </header>
    </div>
  );
}

export default App;
