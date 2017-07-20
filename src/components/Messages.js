import React, { Component } from 'react';

class Messages extends Component {
  render() {
    const { isFetching, failed, description } = this.props
    if (isFetching)
      return (<div>'Loading...'</div>)
    else {
        if (failed)
          return (<div>{description.message}</div>)
        else {
            return (<div></div>)
          }
      }
  }
}

export default Messages