import React from 'react';
import Login from './Login';
import Map from './Map';
import Offcanvas from './Offcanvas';
import CountriesList from './CountriesList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userIsLoggedIn: true,
      indexData: {}
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        indexData: {
          DEU: {
            country: 'Germany',
            change: -1
          },
          ESP: {
            country: 'Spain',
            change: 2
          },
          USA: {
            country: 'USA',
            change: -3
          },
          ITA: {
            country: 'Italyå',
            change: 5
          }
        }
      });
    }, 2000);
  }
  render() {
    return (
      <div className="App min-h-screen bg-gray-100">
        <Offcanvas type="left" />
        <Login isLoggedIn={this.state.userIsLoggedIn} />
        <Map />
        <CountriesList countryProps={this.state.indexData} />
      </div>
    );
  }
}

export default App;
