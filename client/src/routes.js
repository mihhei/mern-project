import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Links } from './components/links';
import { Create } from './components/create';
import { Detail } from './components/detail';
import { Authorisation } from './components/authorisation';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <Links />
        </Route>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Redirect to="/Create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Authorisation />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
