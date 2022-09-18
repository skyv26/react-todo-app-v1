import React, { PureComponent } from 'react';
import style from './About.module.css';

class AboutAuthor extends PureComponent {
  render() {
    return (
      <section className={style.Section}>
        <h1 className={style.SectionHeading}>About the Author</h1>
        <p className={style.SectionDesc}>
          This app was developed by Aakash Verma, a self
          taught web developer and a technical writer.
          He is opened to freelance Gig. So go
          ahead and connect with
          <b> Aakash </b>
          on Twitter @vrma_aakash.
        </p>
      </section>
    );
  }
}

export default AboutAuthor;
