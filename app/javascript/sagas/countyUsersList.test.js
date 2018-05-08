import UserService from '../../_services/users';

import watcherSaga, { countyUsersList } from './countyUsersList';
import * as actionTypes from '../actions/actionTypes';
import { takeLatest, call, put } from 'redux-saga/effects';

UserService.usersListReducer();

describe('sagas', () => {
  it('starts the worker fetch saga', () => {
    const gen = watcherSaga();
    expect(gen.next().value).toEqual(
      takeLatest(actionTypes.FETCH_USERS_API_CALL_REQUEST, countyUsersList)
    );
  });

  describe('#countyUsersList', () => {
    beforeEach(() => {
      UserService.usersListReducer = jest.fn();
    });

    describe('when successful', () => {
      it('executes the happy-path saga', () => {
        const gen = countyUsersList();
        expect(gen.next().value).toEqual(call(UserService.usersListReducer));
        expect(gen.next([1234, 5678]).value).toEqual(
          put({
            type: actionTypes.FETCH_USERS_API_CALL_REQUEST,
            userList: [1234, 5678],
          })
        );
        expect(gen.next().done).toBe(true);
      });
    });

    describe('when failures come back from the fetch', () => {
      it('handles the error', () => {
        const gen = countyUsersList();
        expect(gen.next().value).toEqual(call(UserService.usersListReducer));
        expect(gen.throw('I have made a huge mistake').value).toEqual(
          put({
            type: actionTypes.FETCH_USERS_API_CALL_REQUEST,
            error: 'I have made a huge mistake',
          })
        );
        expect(gen.next().done).toBe(true);
      });
    });
  });
});
