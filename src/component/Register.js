import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";

export default class AddForm extends Component {
  render() {
    return (
      <Container>
        <Form id="insertForm" method="post">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter username"
              name="username"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary">Submit</Button>
        </Form>
      </Container>
    );
  }
}
