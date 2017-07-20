import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Messages extends Component {
  render() {
    const { isFetching, failed, description } = this.props;
    if (isFetching) return (<div>{'Loading...'}</div>);
    if (!failed) return null;
    return (<div>{description.message}</div>);
  }
}

Messages.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default Messages;
