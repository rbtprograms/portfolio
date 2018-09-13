import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import styles from './ViewportContent.css';

export default () => {
  return (
    <div className={styles.viewport_content}>
    <Switch>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
    <p id="content"></p>
  </div>
  )
}