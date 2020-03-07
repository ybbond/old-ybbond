// @flow
import React from 'react';
import {render} from 'react-dom';
import App from './App.js';

const rootElement = document.getElementById('react-app');

if (rootElement) {
  render(<App />, rootElement);
}
