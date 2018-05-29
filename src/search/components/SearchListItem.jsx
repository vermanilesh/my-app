import React, { Component } from 'react';
import { ListGroupItem, Glyphicon, Button } from 'react-bootstrap';

class SearchListItem extends Component {

  constructor(props) {
    super(props)
    this.removePlayer = this.removePlayer.bind(this);
  }

  removePlayer() {
    this.props.onRemovePlayer(this.props.idx)
  }

  render = () => (
    <ListGroupItem>
      {this.props.player.name}
      <Button bsSize="xsmall" className="pull-right" onClick={this.removePlayer}>
        <Glyphicon glyph="remove"> </Glyphicon>
      </Button>
    </ListGroupItem>
  )
}

export default SearchListItem;