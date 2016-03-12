import React from 'react';
let {Component} = React;
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

export default class CharacterThumbnail extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src="http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png">
                            <h3> Character name</h3>
                            <p> character description</p>
                        </Thumbnail>
                    </Col>
                    </Row>
                </Grid>
        );
    }
}
