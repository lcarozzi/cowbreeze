import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

TableRow.propTypes = {
  location: PropTypes.string.isRequired,
  quality: PropTypes.string.isRequired,
};

export default TableRow;
