import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Router } from 'react-router-dom';
import Routes from './services/routes';
import history from './services/routes/history';
import GlobalStyles from './styles/global';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hey App</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Helmet>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </HelmetProvider>
  );
}

export default App;
