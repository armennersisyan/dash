const initialState = {
  token: null,
  user: null,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.user.refreshToken,
        user: {
          uid: action.payload.user.uid,
          email: action.payload.user.email,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return initialState;
  }
}

export default loginReducer;
