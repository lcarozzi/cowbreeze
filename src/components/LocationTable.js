import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class LocationTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Air Quality</th>
          </tr>
        </thead>
        <tbody>
          {this.props.locations.map((location, index) =>
            <TableRow key={index} location={location.location} quality={location.quality} />,
          )}
        </tbody>
      </table>);
  }
}

LocationTable.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default LocationTable;
