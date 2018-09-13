import React from 'react';
import ViewportContent from './viewport/ViewportContent';
import ViewportHeader from './viewport/ViewportHeader';
import { BrowserRouter as Router} from 'react-router-dom';

import styles from './Dashboard.css';

export default () => {
  return (
    <Router>
      <section className={styles.dashboard}>
      <ViewportHeader/>
      <ViewportContent/>
      </section>
    </Router>
  )
}