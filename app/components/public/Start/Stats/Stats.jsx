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
              <CharacterThumbnail name="test" imageUrl="http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"/>
              <CharacterThumbnail name="test" imageUrl="http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"/>
              <CharacterThumbnail name="test" imageUrl="http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"/>
              <CharacterThumbnail name="test" imageUrl="http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"/>
            </Column>
          </Row>
          <Row>
            <Column md={8} mdPush={2}>
              <CharacterThumbnail name="test" imageUrl="http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"/>
              <CharacterThumbnail name="test" imageUrl="http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"/>
              <CharacterThumbnail name="test" imageUrl="http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"/>
              <CharacterThumbnail name="test" imageUrl="http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"/>
            </Column>
          </Row>

      </div>
    );
  }
}
