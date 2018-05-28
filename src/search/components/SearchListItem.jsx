import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class SearchListItem extends Component {

  render = () => (<ListGroupItem>{this.props.player.name}</ListGroupItem>)
}

export default SearchListItem;