import React from 'react';
import style from './Header.module.css';

class Header extends React.PureComponent {
  render() {
    return (
      <header className={style.Header}>
        <a href="/" className={style.Logo}>todos</a>
        <nav className={style.Navigation}>
          <ul className={style.UnorderedList}>
            <li className={style.Link}>
              <a href="/" className={style.MenuLink}>Home</a>
            </li>
            <li className={style.Link}>
              <a href="/about" className={style.MenuLink}>About</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
