import React, { Component } from 'react'
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';

export class Home extends Component {
  render() {
    return (
        <div>
      <div>Home</div>
      <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
</Nav>
      </div>
    )
  }
}

export default Home