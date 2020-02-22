import React, { useEffect, useState, useRef } from 'react';
import Login from './Login';
import mapboxgl from 'mapbox-gl';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      userIsLoggedIn: false,
    }
  }

  render() {
    return (
      <div className="App min-h-screen bg-gray-100" >
        <Login isLoggedIn={this.state.userIsLoggedIn} />
        {/* <div ref={ref}/> */}
      </div>
    );
  }
}

export default App;
