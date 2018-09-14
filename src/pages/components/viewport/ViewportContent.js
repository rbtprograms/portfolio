import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import styles from './ViewportContent.css';

class ViewportContent extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() { 
    const { data } = this.props;
    console.log('**CONETNT**', data.allContentfulProject.edges);

    return (
    <div className={styles.viewport_content}>
      <Switch>
        <Route exact path="/projects" component={() => <Projects projects={data.allContentfulProject.edges}/>}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      <p id="content"></p>
    </div>
    );
  }
}
 
export default ViewportContent;