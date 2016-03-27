import React from 'react';
let {Component} = React;
import Col from 'react-bootstrap/lib/Col';
import "./Top3Bar.css";
//import Actions from '../../../actions/PLODActions';
//import Store from '../../../stores/PLODStore';

export default class Top3Bar extends Component {

  render() {
    console.log(this.props.data);/*eslint no-console:0, no-undef:0*/
    return (
      <Col md={3} xs={6}>
      </Col>
    );
  }
}

Top3Bar.propTypes = { data: React.PropTypes.array.isRequired };
