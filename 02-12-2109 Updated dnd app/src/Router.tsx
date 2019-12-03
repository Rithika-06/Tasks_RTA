import React, { Component } from 'react';
import Home from './components/Home/Home';
import Pagedesigner from './components/Page Designer/Home';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Error from './components/404';

export interface RouteringProps {
  
}
 
export interface RouteringState {
  
}
 
class Routering extends React.Component<RouteringProps, RouteringState> {
  constructor(props: RouteringProps) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/pagedesigner' component={Pagedesigner} />
            <Route path="/" exact component={Home} />
            <Route exact component={Error} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
 
export default Routering;


