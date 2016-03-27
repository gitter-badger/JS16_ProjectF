import React from 'react';
let {Component} = React;
import Col from 'react-bootstrap/lib/Col';
import PLODThumbnail from '../PLODThumbnail/PLODThumbnail';
//import "./Top3Bar.css";

export default class Top3Bar extends Component {

  render() {

    return (
      <Col md={3} xs={6}>
        {this.props.data.map(function(plod) {
          return <PLODThumbnail plod={plod}/>;
        })}
      </Col>
    );
  }
}

Top3Bar.propTypes = { data: React.PropTypes.array.isRequired };
