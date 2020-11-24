import React from 'react';
import Menu from './components/Menu.jsx';
import './header.less'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='header'>
        <div className='header__container'>
          <Menu/>
        </div>
      </div>
    )
  }
}
export default Header;