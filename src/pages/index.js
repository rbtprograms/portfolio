import React from "react";
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import styles from './main.css';

export default () => {
  return (
    <div id="root">
      <Header/>
      <Dashboard/>
    </div>
  )
}
