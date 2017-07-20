import { connect } from 'react-redux';
import Messages from '../components/Messages';

const mapStateToProps = ({ isFetching, failed, description }) => (
  { isFetching, failed, description }
);

export default connect(mapStateToProps)(Messages);
