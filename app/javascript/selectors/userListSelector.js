export const selectUserRecords = state => {
  const usersObject = state.usersListReducer
    ? state.usersListReducer.userList
    : null;
  return usersObject ? usersObject.records.message : null;
};
