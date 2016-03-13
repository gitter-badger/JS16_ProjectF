import React from 'react';
let {Component} = React;
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

export default class CharacterThumbnail extends Component {
    render() {
        return (
            <Col md={3}>
                <Thumbnail src="http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png">
                    <p> Character name</p>
                </Thumbnail>
            </Col>
        );
    }
}
