import React, { Component } from 'react';

class LocationAirQuality extends Component {
  render() {
    let input;
    return (
      <div>
      Location: <input
                  ref={ node => {
                    input = node
                  }} />
        <button onClick={() => this.props.onSearchClick(input.value)}> Search </button>
      </div>
    )
  }
}

export default LocationAirQuality