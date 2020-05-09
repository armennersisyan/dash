import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Wrapper from './styles';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Link to="./login">Login</Link>
      <Link to="./register">Register</Link>
      <Link to="./dashboard">dashboard</Link>
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};


export default DefaultLayout;
