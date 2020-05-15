import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logoutUserSuccess } from '../../store/actions';
import { Wrapper, Header } from './styles';

function AuthLayout({ children }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUserSuccess());
  }

  return (
    <>
      <Header>
        <button type="button" onClick={handleLogout}>Logout</button>
      </Header>
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
