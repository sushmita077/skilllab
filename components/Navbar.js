import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Classy Canteen Corner</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
         
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
          <Nav.Link as={Link} to="/order">Order</Nav.Link>
          <Nav.Link as={Link} to="/payment">Payment</Nav.Link> {/* Added Payment link */}
          <Nav.Link as={Link} to="/admin">Admin Dashboard</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
