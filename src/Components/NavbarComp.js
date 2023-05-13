import React,{ Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import "./Navbar.css"



export default class NavbarComp extends Component {
    render(){
  return (
    
    
    <div>
     <Navbar bg="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#" className='NavTitle'><img src=""></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="  me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"} className='NavTitle'>Home</Nav.Link>
            <Nav.Link as={Link} to={"/Hindi"} className='NavTitle'>Hindi Movies</Nav.Link>
            <Nav.Link as={Link} to={"/English"} className='NavTitle'>English Movies</Nav.Link>
            <Nav.Link as={Link} to={"/Marathi"} className='NavTitle'>Marathi Movies</Nav.Link>
            <Nav.Link as={Link} to={"/Tamil"} className='NavTitle'>Tamil Movies</Nav.Link>     
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='NavTitle'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
    
     )
   }
}


