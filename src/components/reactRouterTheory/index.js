import React from 'react';
import {Route} from 'react-router-dom';
import About from './About/About';
import Card from './Card/Card';

export default class RoutTheory extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log('2', this.props)

    return (
      <>
        <Route path='/about' exact render={() => <h1>Home</h1>}/>
        <Route path='/' exact component={About}/>
        <Route path='/cars' exact component={Card}/>

        <div>
          <nav>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/cars'>About</a>
              </li>
            </ul>
          </nav>
          <hr/>
        </div>
      </>

    )
  }
}