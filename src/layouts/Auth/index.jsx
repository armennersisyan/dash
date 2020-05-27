import React, { useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logoutUserSuccess } from '../../store/actions';
import Sidebar from '../../components/Sidebar';
import Theme from '../../styles/ThemeProvider';
import { Wrapper } from './styles';
import LayoutContext, { LayoutReducer } from './context';

function AuthLayout({ children }) {
  const dispatch = useDispatch();

  const layoutContext = useContext(LayoutContext);
  const [layout, dispatchContext] = useReducer(LayoutReducer, { ...layoutContext });

  function handleLogout() {
    dispatch(logoutUserSuccess());
  }

  return (
    <LayoutContext.Provider value={{ layout, dispatchContext }}>
      <Theme>
        <Sidebar>
          <button type="button" onClick={handleLogout}>Logout</button>
          <button type="button" onClick={() => dispatchContext({ type: 'TOGGLE_SIDEBAR' })}>Side</button>
        </Sidebar>
        <Wrapper sidebarStatus={layout.sidebar}>
          {children}
        </Wrapper>
      </Theme>
    </LayoutContext.Provider>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default React.memo(AuthLayout);
