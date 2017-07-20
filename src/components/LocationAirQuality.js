import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LocationAirQuality extends Component {
  render() {
    let input;
    return (
      <div>
      Location: <input ref={(node) => { input = node; }} />
        <button onClick={() => this.props.fetchAirQuality(input.value)}> Search </button>
      </div>
    );
  }
}

LocationAirQuality.propTypes = {
  fetchAirQuality: PropTypes.func.isRequired,
};

export default LocationAirQuality;
