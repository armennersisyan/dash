import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './services/routes';
import history from './services/routes/history';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
