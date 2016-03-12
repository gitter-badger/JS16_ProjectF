import React from 'react';
let {Component} = React;
import styles from './Start.css';
import Stats from './stats/Stats.jsx';

export default class Start extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Stats/>
        Start
      </div>
    );
  }
}
