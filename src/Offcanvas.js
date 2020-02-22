import React from 'react';

class Offcanvas extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    if (this.props.type === 'right') {
      return (
        <div className="absolute z-10 h-full w-1/5 bg-white left-0 top-0 border-r">
          Content
        </div>
      )
    }
    if (this.props.type === 'left') {
      return (
          <div className="absolute z-10 h-full w-1/5 bg-white right-0 top-0 border-l">
          Content
          </div>
      )
    }
    return null;
  }
}

export default Offcanvas;
