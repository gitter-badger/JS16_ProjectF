import React from 'react';
let {Component} = React;

import { Row, Col } from 'react-bootstrap';

import Store from '../../../stores/PLODStore';
import Actions from '../../../actions/PLODActions';
import Top3Bar from '../Top3Bar/Top3Bar';

export default class Stats extends Component {

  constructor (props) {
    super(props);
    this.state = {characters: Store.getPlodCharacters()};
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount (){
    Store.addChangeListener(this._onChange);
  }

  componentDidMount(){
    Actions.loadPlodCharacters(3);
  }

  componentWillUnmount(){
    Store.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      characters: Store.getPlodCharacters()
    });
  }

  render() {
    return (
      <div>
        <Row className="home-plod">
          <h1>Characters most likely to die</h1>
          <Col md={8} mdOffset={3}>
            <Top3Bar data={this.state.characters}/>
          </Col>
        </Row>
      </div>
    );
  }
}
