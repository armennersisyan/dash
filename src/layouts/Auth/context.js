import { createContext } from 'react';

export const initialState = {
  sidebar: true,
};

export const LayoutReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebar: !state.sidebar,
      };
    default:
      return state;
  }
};

const LayoutContext = createContext(initialState);
export default LayoutContext;
