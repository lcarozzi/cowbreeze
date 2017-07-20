import { connect } from 'react-redux';
import LocationTable from '../components/LocationTable';

const mapStateToProps = ({ locations, isFetching }) => (
  { locations, isFetching }
);

export default connect(mapStateToProps)(LocationTable);
