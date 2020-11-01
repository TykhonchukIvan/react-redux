import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={{
              pathname: '/',
            }}>Home</NavLink>
          </li>
          <li>
            <NavLink to={{
              pathname: '/post',
            }}>Post</NavLink>
          </li>
          <li>
            <NavLink to={{
              pathname: '/todo',
            }}>To-do</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Menu;