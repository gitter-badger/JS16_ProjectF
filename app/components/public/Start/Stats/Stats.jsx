import React from 'react';
let {Component} = React;
import styles from './Stats.css';
import CharacterThumbnail from './CharacterThumbnail.jsx';

export default class Stats extends Component {
  render() {
    return (
      <div className={styles.stats}>
        <CharacterThumbnail/>
      </div>
    );
  }
}
