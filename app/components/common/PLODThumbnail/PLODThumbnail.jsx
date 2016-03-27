import React from 'react';
let {Component} = React;
//import "./PLODThumbnail.css";
import Store from '../../../stores/CharactersStore';
import Actions from '../../../actions/CharactersActions';

export default class PLODThumbnail extends Component {

  constructor (props) {
    super(props);
    this.state = {characters: Store.getCharacter()};
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount (){
    Store.addChangeListener(this._onChange);
  }

  componentDidMount(){
    Actions.loadCharacterByID(this.props.plod.character);
  }

  componentWillUnmount(){
    Store.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      character: Store.getCharacter()
    });
  }

  render() {
        return (
            <div>{this.state.character.name}</div>
        );
    }
}

PLODThumbnail.propTypes = { plod: React.PropTypes.object.isRequired };
