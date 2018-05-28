import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Grid, Col } from 'react-bootstrap';


export const SignInForm = (props) => (
  <Grid  className="form-grid" >
    <h4>Sign In From</h4>
    <Form horizontal onSubmit={props.onSubmit} >
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={4}>
          <FormControl type="email" placeholder="Email" onChange={e => props.onChange(e.target)} />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={4}>
          <FormControl type="password" placeholder="Password" onChange={e => props.onChange(e.target)} />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">Sign in</Button>
        </Col>
      </FormGroup>
    </Form>
  </Grid>
)
