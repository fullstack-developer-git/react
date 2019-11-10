import React from 'react';
import Menu from './components/menu'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />          
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </Router>

    );
  }
}


export default App;
