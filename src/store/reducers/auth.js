import { LOGIN, LOGOUT } from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload,
      };
    case LOGOUT:
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
