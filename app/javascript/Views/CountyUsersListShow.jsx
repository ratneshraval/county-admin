import React from 'react';
import PropTypes from 'prop-types';

class CountyUsersList extends React.Component {
  render() {
    return (
      <div>
        Name: {this.props.name}
        Response: {this.props.userList}
      </div>
    );
  }
}
CountyUsersList.propTypes = {
  name: PropTypes.string,
  userList: PropTypes.string,
};
CountyUsersList.defaultProps = {
  name: 'Hello Cognito App User!',
};

export default CountyUsersList;
