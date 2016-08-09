import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import PokeApp from './containers/PokeApp/PokeApp';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PokeApp} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
