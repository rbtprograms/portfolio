import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Project extends Component {

  static propTypes = {
    project: PropTypes.object.isRequired
  };

  render() {
    const { project } = this.props;
    console.log('**PROJECT**', project); 

    return (
      <li>
        <h4>{project.node.title}</h4>
        <span>{project.node.shortDescription}</span>
      </li>
    );
  }
};
