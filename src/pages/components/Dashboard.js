import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ViewportContent from './viewport/ViewportContent';
import ViewportHeader from './viewport/ViewportHeader';
import { BrowserRouter as Router} from 'react-router-dom';
import styles from './Dashboard.css';

class Dashboard extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() { 
    const { data } = this.props;
    console.log('DASHBOARD', data)

    return (
    <Router projects={data}>
      <section className={styles.dashboard}>
      <ViewportHeader/>
      <ViewportContent data={data}/>
      </section>
    </Router>
    );
  }
}
 
export default Dashboard;