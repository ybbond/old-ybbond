// @flow
import React from 'react';
import {Route, Switch} from 'react-router';

import AboutPage from './Pages/AboutPage';
import CVPage from './Pages/CVPage';
import UsesPage from './Pages/UsesPage';
import NotFoundPage from './Pages/NotFoundPage';

export default function routes() {
  return (
    <Switch>
      <Route exact path="/">
        <CVPage />
      </Route>
      <Route path="/uses">
        <UsesPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
