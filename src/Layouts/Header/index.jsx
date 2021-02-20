import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/Home">Home</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
          <Button variant="outline-light">Rechercher</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
