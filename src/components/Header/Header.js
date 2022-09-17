import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import style from './Header.module.css';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuToggle: false,
    };

    this.toggleButtonHandler = this.toggleButtonHandler.bind(this);
  }

  toggleButtonHandler = () => {
    this.setState((prev) => ({ menuToggle: !prev.menuToggle }));
  }

  render() {
    const { menuToggle } = this.state;
    return (
      <header className={`${style.Header} ${menuToggle ? style.ExpandHeader : ''}`}>
        <button type="button" className={style.MenuButton} onClick={this.toggleButtonHandler}>
          {menuToggle ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
        {menuToggle ? (
          <nav className={style.Navigation}>
            <ul className={style.UnorderedList}>
              <li className={style.Link}>
                <NavLink
                  to="/"
                  className={style.MenuLink}
                  activeClassName={style.active}
                  onClick={this.toggleButtonHandler}
                  exact
                >
                  Home
                </NavLink>
              </li>

              <li className={style.Link}>
                <NavLink
                  to="/about"
                  className={style.MenuLink}
                  activeClassName={style.active}
                  onClick={this.toggleButtonHandler}
                  exact
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
    );
  }
}

export default Header;
