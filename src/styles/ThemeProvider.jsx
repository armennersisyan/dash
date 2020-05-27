import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from './theme';

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default Theme;
