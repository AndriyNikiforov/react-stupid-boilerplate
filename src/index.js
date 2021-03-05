import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import history from './utils/history';

import Routes from './routes';

ReactDOM.render(
  <Provider store={}>
    <Router history={history}>
      <Routes />
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Title</title>
      </Helmet>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
