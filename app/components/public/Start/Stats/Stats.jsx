import React from 'react';
let {Component} = React;
import styles from './Stats.css';
import Row from 'react-bootstrap/lib/Row';
import Column from 'react-bootstrap/lib/Col';
import CharacterThumbnail from './CharacterThumbnail.jsx';

export default class Stats extends Component {
  render() {
    var mostLikelyToDieComponents = this.mostLikelyToDie().map(function(character) {
      return <CharacterThumbnail name={character.name} imageUrl={character.imageUrl}/> ;
    });

    var mostLovedOnTwitterComponents = this.mostLovedOnTwitter().map(function(character) {
      return <CharacterThumbnail name={character.name} imageUrl={character.imageUrl}/> ;
    });

    return (
      <div className={styles.stats}>
          <Row>
            <Column md={8} mdPush={2}>
              {mostLikelyToDieComponents}
            </Column>
          </Row>
          <Row>
            <Column md={8} mdPush={2}>
              {mostLovedOnTwitterComponents}
            </Column>
          </Row>

      </div>
    );
  }

  mostLikelyToDie() {
    return [
      {name: "test", imageUrl: "http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"},
      {name: "test", imageUrl: "http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"},
      {name: "test", imageUrl: "http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"},
      {name: "test", imageUrl: "http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"}
    ];
  }
  mostLovedOnTwitter() {
    return [
      {name: "test", imageUrl: "http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"},
      {name: "test", imageUrl: "http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"},
      {name: "test", imageUrl: "http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"},
      {name: "test", imageUrl: "http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png"}
    ];
  }
}
