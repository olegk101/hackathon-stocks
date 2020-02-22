import React from 'react';
import CountriesList from './CountriesList';
import Holdings from './Holdings';
import { ReactComponent as Cancel } from './cancel.svg';
import { ReactComponent as User } from './user.svg';

class Offcanvas extends React.Component {
  state = {
    rightPanelOpen: true
  };

  render() {
    const { rightPanelOpen } = this.state;

    if (this.props.type === 'right') {
      return (
        <div
          className={`absolute z-10 h-full w-1/5 bg-white right-0 top-0 border-l ${
            rightPanelOpen
              ? ''
              : 'transform translate-x-full transition-transform '
          }`}
        >
          <div
            className="p-2"
            onClick={() => {
              this.setState({
                rightPanelOpen: !rightPanelOpen
              });
            }}
          >
            <Cancel className="w-4" />
          </div>
          {rightPanelOpen ? null : (
            <div
              className="absolute left-0 pt-2 pr-4 top-0 transform -translate-x-8 transition transition-opacity ease-in duration-700"
              onClick={() => {
                this.setState({
                  rightPanelOpen: !rightPanelOpen
                });
              }}
            >
              <User className="w-6" />
            </div>
          )}
          <Holdings data={this.props.content} add={this.props.add} />
        </div>
      );
    }
    if (this.props.type === 'left') {
      return (
        <div className="absolute z-10 h-full w-3/12 bg-white left-0 top-0 border-r">
          <CountriesList countryProps={this.props.content} />
        </div>
      );
    }
    return null;
  }
}

export default Offcanvas;
