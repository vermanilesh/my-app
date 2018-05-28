import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Grid, Col } from 'react-bootstrap';

class AddPlayer extends Component {
  constructor(props) {
    super(props)
    this.submitForm.bind(this);
    this.state = {
      name: ""
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.name)
  }

  render = () => (
    <Grid  className="form-grid" >
      <Form horizontal onSubmit={(event) => {this.submitForm(event)}} >
        <h4>Add Player</h4>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={4}>
            <FormControl 
              type="text" 
              placeholder="Player's Name" 
              onChange={(event) => this.setState({name: event.target.value})}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Add</Button>
          </Col>
        </FormGroup>
      </Form>
    </Grid>
  )
}

export default AddPlayer;