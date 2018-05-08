import usersListReducer from './usersListReducer';
import * as actionTypes from '../actions/actionTypes';

describe('usersListReducer', () => {
  it('handles FETCH_USERS_API_CALL_REQUEST', () => {
    const requestAction = {
      type: actionTypes.FETCH_USERS_API_CALL_REQUEST,
    };
    const state = { userList: null, fetching: false };
    expect(usersListReducer(state, requestAction)).toEqual({
      usersListReducer: {
        fetching: true,
        userList: null,
        error: null,
      },
    });
  });

  it('handles FETCH_USERS_API_CALL_SUCCESS', () => {
    const responseAction = {
      type: actionTypes.FETCH_USERS_API_CALL_SUCCESS,
      userList: ['user1', 'user2'],
    };
    const state = { userList: null, fetching: true, error: null };
    expect(usersListReducer(state, responseAction)).toEqual({
      usersListReducer: {
        fetching: false,
        userList: { records: ['user1', 'user2'], XHRStatus: 'ready' },
        error: null,
      },
    });
  });

  it('handles FETCH_USERS_API_CALL_FAILURE', () => {
    const failureAction = {
      type: actionTypes.FETCH_USERS_API_CALL_FAILURE,
      userList: null,
      error: 'error happened',
    };
    const state = { userList: null, fetching: true, error: null };
    expect(usersListReducer(state, failureAction)).toEqual({
      usersListReducer: {
        fetching: false,
        userList: null,
        error: 'error happened',
      },
    });
  });
});
