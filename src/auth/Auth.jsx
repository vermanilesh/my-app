import React, { Component } from 'react';
import { SignInForm } from './SignInForm.jsx';

class Auth extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SignInForm/>
    )
  }
}

export default Auth;