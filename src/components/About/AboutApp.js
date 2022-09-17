import React, { PureComponent } from 'react';
import style from './About.module.css';

class AboutApp extends PureComponent {
  render() {
    return (
      <section className={style.Section}>
        <h1 className={style.SectionHeading}>About the App</h1>
        <p className={style.SectionDesc}>
          In this app, you can add, delete, submit and edit items. To edit items,
          simply double click on it. Once you are done, press the enter key to resubmit.
          This app will persist your data in the browser local storage. So whether you reload,
          close your app or reopened it, you still have access to your to-dos items.
        </p>
      </section>
    );
  }
}

export default AboutApp;
