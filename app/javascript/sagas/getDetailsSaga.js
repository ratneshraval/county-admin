import UserService from '../_services/users';
import * as actionTypes from '../actions/actionTypes';
import { takeLatest, call, put } from 'redux-saga/effects';

const id = 'id';
// worker saga: makes the api call when watcher saga sees the action
export function* getDetails() {
  try {
    const details = yield call(UserService.fetchUserDetails, id);

    // dispatch a success action to the store with the new users
    yield put({
      type: actionTypes.FETCH_DETAILS_API_CALL_SUCCESS,
      details,
    });
    // console.log("userList:"+ userList.message);
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({
      type: actionTypes.FETCH_DETAILS_API_CALL_FAILURE,
      error,
    });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* detailsSaga() {
  yield takeLatest(actionTypes.FETCH_DETAILS_API_CALL_REQUEST, getDetails);
}
