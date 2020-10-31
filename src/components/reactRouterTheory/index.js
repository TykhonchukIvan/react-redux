import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import About from './About/About';
import Card from './Card/Card';
import './routStyle.less';

export default class RoutTheory extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log('2', this.props)

    return (
      <>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink
                  to={'/'}
                  exact
                  activeClassName={'wfm-active'}>
                  Home</NavLink>
              </li>
              <li>
                <NavLink
                  to={'/about'}
                  exact
                  activeStyle={{color: 'blue'}}
                >About</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname:'/cars',
                    search:'?a=1&b=2',
                    hash:'wfm-hash'
                  }}
                  exact
                >Cars</NavLink>
              </li>
            </ul>
          </nav>
          <hr/>

          <Route path='/' exact render={() => <h1>Home</h1>}/>
          <Route path='/about' exact component={About}/>
          <Route path='/cars' exact component={Card}/>

        </div>
      </>

    )
  }
}