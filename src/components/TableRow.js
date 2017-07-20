import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.location}</td>
        <td>{this.props.quality}</td>
      </tr>
    );
  }
}

export default TableRow