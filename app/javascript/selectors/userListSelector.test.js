import { selectUserRecords } from './selectors';

describe('selectors', () => {
  describe('#selectUserRecords', () => {
    it('selects the user records', () => {
      const state = {
        usersListReducer: {
          userList: {
            records: ['first', 'second', 'third'],
          },
        },
        other_stuff: { bad: 'ignore' },
      };

      expect(selectUserRecords(state)).toEqual(['first', 'second', 'third']);
    });

    it('selects empty users', () => {
      const state = {
        usersListReducer: {},
        other_stuff: { bad: 'ignore' },
      };
      expect(selectUserRecords(state)).toBe(null);
    });

    it('selects no users', () => {
      const state = {
        other_stuff: { bad: 'ignore' },
      };
      expect(selectUserRecords(state)).toBe(null);
    });
  });
});
