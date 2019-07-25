import React from 'react';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './page/Home';
import Login from './page/login'

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route path="/" exact  component={Login} />
            <Layout>
              <Switch>
                <Route path="/home" component={Home} />   
              </Switch>
            </Layout>
          </Switch>
      </HashRouter>
    );
  }
}
