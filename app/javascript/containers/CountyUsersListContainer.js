import { connect } from 'react-redux';
import CountyUsersList from '../Views/CountyUsersListShow.jsx';
import * as actionTypes from '../actions/actionTypes';
import { selectUserRecords } from '../selectors/userListSelector';

const mapStateToProps = state => {
  return {
    userList: selectUserRecords(state),
  };
};

const mapDispatchToProps = dispatch => {
  dispatch({ type: actionTypes.FETCH_USERS_API_CALL_REQUEST });
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CountyUsersList);
