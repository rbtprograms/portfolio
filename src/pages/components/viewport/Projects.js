import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import styles from './Projects.css';

export default class Projects extends Component {

  static propTypes = {
    projects: PropTypes.array.isRequired
  };

  render() {
    const { projects } = this.props;

    return (
      <ul className={styles.projects}>
        {projects.map(project => (
          <Project project={project} key={project.node.id}/>
        ))}
      </ul>
    );
  }
};