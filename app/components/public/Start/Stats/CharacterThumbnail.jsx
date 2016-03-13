import React from 'react';
let {Component} = React;
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

export default class CharacterThumbnail extends Component {
    render() {
        return (
            <Col md={3}>
                <Thumbnail src={this.props.imageUrl}>
                    <p> {this.props.name}</p>
                </Thumbnail>
            </Col>
        );
    }
}
