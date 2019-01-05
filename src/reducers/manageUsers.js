export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', state);
      return {
        ...state,
        users: [...state.users, action.user]
      }

    default:
      return state;
  }
};
