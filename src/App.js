import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Post from './pages/post';
import Todo from './pages/todo';

import './App.less';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/post' component={Post}/>
          <Route path='/todo' component={Todo}/>
          <Redirect to={'/'}/>
        </Switch>
      </div>
    )
  }

}