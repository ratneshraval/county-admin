import fetchDetails from './detailsReducers';
import * as actionTypes from '../actions/actionTypes';

describe('reducer', () => {
  it('handles FETCH_DETAILS_API_CALL_REQUEST', () => {
    const requestAction = {
      type: actionTypes.FETCH_DETAILS_API_CALL_REQUEST,
    };
    const state = { details: null, fetching: false };
    expect(fetchDetails(state, requestAction)).toEqual({
      fetching: true,
      details: null,
      error: null,
    });
  });

  it('handles FETCH_DETAILS_API_CALL_SUCCESS', () => {
    const responseAction = {
      type: actionTypes.FETCH_DETAILS_API_CALL_SUCCESS,
      details: { id: 'key1', username: 'user1' },
    };
    const state = { details: null, fetching: true, error: null };

    expect(fetchDetails(state, responseAction)).toEqual({
      fetching: false,
      details: {
        XHRStatus: 'ready',
        records: { id: 'key1', username: 'user1' },
      },
      error: null,
    });
  });

  it('handles FETCH_DETAILS_API_CALL_FAILURE', () => {
    const failureAction = {
      type: actionTypes.FETCH_DETAILS_API_CALL_FAILURE,
      details: null,
      error: 'error happened',
    };
    const state = { details: null, fetching: true, error: null };
    expect(fetchDetails(state, failureAction)).toEqual({
      fetching: false,
      details: null,
      error: 'error happened',
    });
  });
});
