export const REQUEST_AIR_QUALITY = 'REQUEST_AIR_QUALITY'
export const RECEIVED_AIR_QUALITY = 'RECEIVED_AIR_QUALITY'
export const REQUEST_FAIL = 'REQUEST_FAIL'

const requestAirQuality = (location) => {
  return {
    type: REQUEST_AIR_QUALITY,
    location
  }
}

const receivedAirQuality = (location, json) => {
  return {
    type: RECEIVED_AIR_QUALITY,
    location,
    descrption: JSON.stringify(json)
  }
}

const requestFail = (location, error) => {
  return {
    type: REQUEST_FAIL,
    description: error,
    location
  }
}

export const fetchAirQuality = (location) => {
  return (dispatch) => {
    const key = 'baa5a5a46db9448399d03d0e4e0776be'
    dispatch(requestAirQuality(location))
    return fetch(`http://api.breezometer.com/baqi/?key=${key}&location=${location}`)
      .then(response => response.json())
      .then(json => json.data_valid ? json : Promise.reject(json.error))
      .then(json => dispatch(receivedAirQuality(location, json)))
      .catch(error => dispatch(requestFail(location, error)))
  }
}
