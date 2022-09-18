import React, { PureComponent } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import AboutAuthor from './AboutAuthor';
import AboutApp from './AboutApp';
import style from './About.module.css';

class About extends PureComponent {
  render() {
    return (
      <div className={style.About}>
        <nav className={style.AboutNav}>
          <ul className={style.AboutNavUl}>
            <li className={style.List}>
              <NavLink to="/about/about-app" className={style.MenuLink}>About App</NavLink>
            </li>
            <li className={style.List}>
              <NavLink to="/about/about-author" className={style.MenuLink}>About Author</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about/about-app" exact>
            <AboutApp />
          </Route>
          <Route path="/about/about-author" exact>
            <AboutAuthor />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default About;
