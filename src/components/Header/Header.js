import React from 'react';
import style from './Header.module.css';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <a href="https://" className={style.Logo}>todos</a>
      </header>
    );
  }
}

export default Header;
