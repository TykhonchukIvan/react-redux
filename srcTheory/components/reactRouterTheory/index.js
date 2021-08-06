import React from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import About from './About/About';
import Card from './Card/Card';
import CarDetail from './CarDetail/CarDetail.jsx';
import './routStyle.less';

export default class RoutTheory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
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
                    pathname: '/cars',
                    // search:'?a=1&b=2',
                    // hash:'wfm-hash'
                  }}
                  exact
                >Cars</NavLink>
              </li>
            </ul>
          </nav>
          <hr/>
          <div style={{textAlign:'center'}}>
            <h3>Is logged in {this.state.isLoggedIn ? 'true':'false'}</h3>
            <button onClick={()=>this.setState({isLoggedIn: true})}>Log in</button>
          </div>
          <hr/>
          <Switch>
            <Route path='/' exact render={() => <h1>Home</h1>}/>
            {this.state.isLoggedIn ? <Route path='/about' component={About}/> : null}
            <Route path='/cars/:name' component={CarDetail}/>
            <Route path='/cars' component={Card}/>
            <Redirect to={'/'}/>
            {/*<Route render={()=><h1 style={{color:'red'}}>404</h1>}/>*/}
          </Switch>
        </div>
      </>

    )
  }
}