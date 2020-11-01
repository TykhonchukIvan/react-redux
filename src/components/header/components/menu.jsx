import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu() {
  return (
    <div className='header__container-menu'>
      <nav>
        <ul>
          <li>
            <NavLink to={{pathname: '/'}}
                     exact
                     activeClassName={'wfm-active'}>
              Home</NavLink>
          </li>
          <li>
            <NavLink to={{pathname: '/post'}}
                     exact
                     activeClassName={'wfm-active'}>
              Post</NavLink>
          </li>
          <li>
            <NavLink to={{pathname: '/todo'}}
                     exact
                     activeClassName={'wfm-active'}>
              To-do</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;