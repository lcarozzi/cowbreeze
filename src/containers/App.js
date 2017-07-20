import React, { Component } from 'react';
import { connect } from 'react-redux'
import LocationTable from '../components/LocationTable'
import LocationAirQuality from '../components/LocationAirQuality'
import Messages from '../components/Messages'
import { fetchAirQuality } from '../actions'

const mapDispatchToSearchProps = (dispatch) => {
  return {
    onSearchClick: (location) => {
      dispatch(fetchAirQuality(location))
    }
  }
}

const LocationAirQualityContainer = connect(
  null,
  mapDispatchToSearchProps
)(LocationAirQuality);

const mapStateToTableProps = (state) => {
  return {
    locations: state.locations.slice(0,5),
    isFetching: state.isFetching
  }
}

const LocationTableContainer = connect(
  mapStateToTableProps
)(LocationTable);

const mapStateToMessagesProps = (state) => {
  return {
    isFetching: state.isFetching,
    failed: state.failed,
    description: state.description
  }
}

const MessagesContainer = connect(
  mapStateToMessagesProps
)(Messages);

class App extends Component {
  render() {
    return (
      <div>
        <LocationAirQualityContainer />
        <MessagesContainer />
        <LocationTableContainer />
      </div>
    );
  }
}

export default App;
