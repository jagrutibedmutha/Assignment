import React from 'react';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar className="header">
      <Container fluid className="header-container">
        <Navbar.Brand className="title">Test App</Navbar.Brand>
        <Nav className="ml-auto">
          <Dropdown align="end">
            <Dropdown.Toggle as="a" className="dropdown-toggle-link">
              User ABC
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
