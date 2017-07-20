import { connect } from 'react-redux';
import LocationAirQuality from '../components/LocationAirQuality';
import { fetchAirQuality } from '../actions';

export default connect(null, { fetchAirQuality })(LocationAirQuality);
