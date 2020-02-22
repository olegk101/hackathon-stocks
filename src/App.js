import React from 'react';
import Login from './Login';
import Map from './Map';
import Offcanvas from './Offcanvas';
import {
  getGlobalStatus,
  getToken,
  saveToken,
  getUserHoldings,
  addTicker
} from './requests';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userIsLoggedIn: true,
      indexData: {},
      userHoldings: []
    };
  }

  async getGlobalData() {
    const data = await getGlobalStatus();

    const indexData = {};
    data.map(d => {
      const key = Object.keys(d)[0];

      indexData[key] = d[key];
    });

    this.setState({
      indexData
    });
  }

  async getUserData() {
    const userHoldings = await getUserHoldings();

    this.setState({
      userHoldings
    });
  }

  async componentDidMount() {
    try {
      const token = await getToken();
      saveToken(token);

      setInterval(() => {
        this.getGlobalData();
        this.getUserData();
      }, 2000);
    } catch (error) {
      console.log('err', error);
    }
  }

  add = async ticker => {
    try {
      await addTicker(ticker);
      await this.getUserData();
    } catch (error) {
      console.log('ERR', error);
    }
  };

  render() {
    return (
      <div className="App min-h-screen bg-gray-100">
        <Offcanvas type="left" content={this.state.indexData} />
        <Offcanvas
          type="right"
          content={this.state.userHoldings}
          add={this.add}
        />
        <Login isLoggedIn={this.state.userIsLoggedIn} />
        <Map indexData={this.state.indexData} />
      </div>
    );
  }
}

export default App;
