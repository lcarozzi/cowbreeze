import React, { Component } from 'react'
import TableRow from './TableRow'

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
            <TableRow key={index} location={location.location} quality={location.quality}/>
          )}
        </tbody>
      </table>);
  }
}

export default LocationTable