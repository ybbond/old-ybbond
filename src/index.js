// @flow
import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import App from './App.js';

const history = createBrowserHistory();
const rootElement = document.getElementById('react-app');

if (rootElement) {
  render(
    <Router history={history}>
      <App />
    </Router>,
    rootElement,
  );
}
