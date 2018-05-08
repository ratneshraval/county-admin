import React from 'react';
import PropTypes from 'prop-types';
import CountyUsersListContainer from '../containers/CountyUsersListContainer';
import { fetchUsersActions } from '../actions/usersActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUserRecords } from '../selectors/userListSelector';

class Home extends React.Component {
  componentDidMount() {
    this.props.actions.fetchUsersActions();
  }
  render() {
    return <CountyUsersListContainer />;
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, _ownProps) {
  return {
    userList: selectUserRecords(state),
  };
}

function mapDispatchToProps(dispatch, _ownProps) {
  const actions = { fetchUsersActions };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
