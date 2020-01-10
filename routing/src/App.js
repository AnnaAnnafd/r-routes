import React, { Fragment } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import * as path from './constants/routes';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={path.HOME} component={Home} />
        <Route path={path.ABOUT} component={About} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
