import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/components_post/header';
import Post from './pages/post';
import Todo from './pages/todo';

import './App.less';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header/>
        <Switch>
          <Route path='/' exact component={Post}/>
          <Route path='/todo' component={Todo}/>
          <Redirect to={'/'}/>
        </Switch>
      </>
    )
  }

}