import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Rutvik Patel</h2>
        <p><a href="mailto:patelrutvik1702@gmail.com">patelrutvik1702@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Rutvik. I like building things.
        I am a <a href="https://www.centennialcollege.ca/">Centennial College</a> alumni, and
        the front end developer of <a href="https://cakepm.com">Cake</a>. Before Cake I was
        at <a href="https://mitel.com">Mitel</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Rutvik Patel <Link to="/">rutvikpatel.ca</Link>.</p>
    </section>
  </section>
);

export default SideBar;
