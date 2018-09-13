import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ViewportHeader.css';

export default () => {
  return (
    <section className={styles.viewport_header}>
      <Link 
        to="/projects"
        >work</Link>
      <Link
        to="/about"
        >about</Link>
        <Link
        to="/contact"
      >contact</Link>
    </section>
  )
}