import { REQUEST_AIR_QUALITY, RECEIVED_AIR_QUALITY, REQUEST_FAIL } from '../actions'

const initialState = {
  isFetching: false,
  failed: false,
  description: '',
  locations: []
}

function cowBreezeApp(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AIR_QUALITY:
      return Object.assign({}, state, {
        isFetching: true,
        failed: false,
        description: 'Loading...',
        locations: state.locations
      })

    case RECEIVED_AIR_QUALITY:
      return Object.assign({}, state, {
        isFetching: false,
        failed: false,
        description: '',
        locations: [{
          location: action.location,
          quality: action.descrption
        }, ...state.locations]
      })

    case REQUEST_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        failed: true,
        description: action.description,
        locations: state.locations
      })

    default:
      return state
  }
}

export default cowBreezeApp
