import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { LinksPage } from './pages/Links.page';
import { DetailPage } from './pages/Detail.page';
import { CreatePage } from './pages/Create.page';
import { AuthPage } from './pages/Auth.page';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/"/>
    </Switch>
  );
}