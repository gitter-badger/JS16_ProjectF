import React from 'react';
let {Component} = React;
import styles from './Stats.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Column from 'react-bootstrap/lib/Col';
import CharacterThumbnail from './CharacterThumbnail.jsx';

export default class Stats extends Component {
  render() {
    return (
      <div className={styles.stats}>
          <Row>
            <Column md={8} mdPush={2}>
              <CharacterThumbnail/>
              <CharacterThumbnail/>
              <CharacterThumbnail/>
              <CharacterThumbnail/>
            </Column>
          </Row>
          <Row>
            <Column md={8} mdPush={2}>
              <CharacterThumbnail/>
              <CharacterThumbnail/>
              <CharacterThumbnail/>
              <CharacterThumbnail/>
            </Column>
          </Row>

      </div>
    );
  }
}
