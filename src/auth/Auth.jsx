import React, { Component } from 'react';
import { SignInForm } from './SignInForm.jsx';
import { connect } from 'react-redux';
import { authActions } from './actions/auth.actions.jsx';
import SearchList from '../search/containers/SearchList.jsx';

class Auth extends Component {
  constructor() {
    super();


    this.state = {
      user: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSate = this.updateSate.bind(this);
  }

  handleSubmit() {
    this.props.dispatch(authActions.signIn(this.state.user))
  }

  updateSate(event) {
    let user = this.state.user;
    user[event.type] = event.value;
    this.setState({
      user: user
    })
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <SearchList />
      )
    } else {
      return (
        <SignInForm
          onChange={(event) => this.updateSate(event)}
          onSubmit={this.handleSubmit}
        />
      )

    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(Auth);
