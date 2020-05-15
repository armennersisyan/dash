import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { loginUserSuccess } from '../../store/actions';

import DefaultLayout from '../../layouts/Default';
import AuthLayout from '../../layouts/Auth';

export default function RouteWrapper({ component: Component, isPrivate }) {
  const dispatch = useDispatch();
  const signed = useSelector((state) => state.auth && state.auth.token);

  /**
   * Check if token exists in localStorage and dispatch to store
   */
  const token = localStorage.getItem('token');
  if (token !== null) {
    dispatch(loginUserSuccess({ user: { refreshToken: token } }));
  }

  /**
   * Redirect user to Login page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !signed) {
    return <Redirect to="/login" />;
  }

  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = isPrivate ? AuthLayout : DefaultLayout;

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return (
    <Route
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
