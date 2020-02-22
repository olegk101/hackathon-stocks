import React from 'react';
import Login from './Login';
import Map from './Map';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userIsLoggedIn: true
    };
  }

  render() {
    return (
      <div className="App min-h-screen bg-gray-100">
        <Login isLoggedIn={this.state.userIsLoggedIn} />
        <Map  />
      </div>
    );
  }
}

export default App;
