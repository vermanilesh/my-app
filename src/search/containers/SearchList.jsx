import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Col, FormControl } from 'react-bootstrap';

import SearchListItem from '../components/SearchListItem.jsx';
import AddPlayer from '../components/AddPlayer.jsx';
import { searchActions } from '../actions/search.actions';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.updateFilters = this.updateFilters.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.state = {
      listItems: this.props.players,
      filters: ""
    }
  }

  updateFilters = (event) => {
    this.setState({...this.state,
      filters: event.target.value.toLowerCase()
    })
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      ...this.state,
      listItems: nextProps.players
    })
  }

  addPlayer = (name) => {
    this.props.dispatch(searchActions.addPlayer(name))
  }

  render() {
    const searchListItems = this.state.listItems.map((item, index) => {
      if(item.name.toLowerCase().includes(this.state.filters.trim())) {
        return <SearchListItem player={item} key={index}/>
      }
    })
    return (
      <div>
        <AddPlayer onFormSubmit={this.addPlayer} />
        <Col sm={4}>
          <FormControl onChange={(event) => this.updateFilters(event)} placeholder="Search here" />
          <ListGroup>
          {searchListItems}
        </ListGroup>
        </Col>
      </div>
    )
      
  }
}

const mapStateToProps = state => {
  return {
    players: state.searchReducer.players
  }
}

export default connect(mapStateToProps)(SearchList);
