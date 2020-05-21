const initialState = {
  user: null,
  isPending: false,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          uid: action.payload.user.uid,
          email: action.payload.user.email,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    case 'PENDING':
      return {
        ...state,
        isPending: action.status,
      };
    default:
      return initialState;
  }
}

export default loginReducer;
