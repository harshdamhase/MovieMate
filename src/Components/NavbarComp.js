import React,{ Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class NavbarComp extends Component {
    render(){
  return (
    
    
    <div>
     <Navbar className="NavColor" expand="lg" >
      <Container fluid >
        <Navbar.Brand href="#" className='NavTitle'><img src=""></img></Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll white " />
        <Navbar.Collapse className='collapse' id="navbarScroll">
          <Nav
            className="  me-auto my-2 my-lg-0 "
            style={{ maxHeight: '500px' }}
           
          >
            <Nav.Link as={Link} to={"/"} className='NavTitle'>
              <text className='p-3 NavTitle'>Home</text>
            </Nav.Link>
            <Nav.Link as={Link} to={"/Hindi"} >
              <text className='p-3 NavTitle'>Hindi Movies</text>
            </Nav.Link>
            <Nav.Link as={Link} to={"/English"}> 
              <text className='p-3 NavTitle'>English Movies</text>
            </Nav.Link>
            <Nav.Link as={Link} to={"/Marathi"} className='NavTitle'>
              <text className='p-3 NavTitle'>Marathi Movies</text>
            </Nav.Link>
            <Nav.Link as={Link} to={"/Tamil"} className='NavTitle'>
              <text className='p-3 NavTitle'>Tamil Movies</text>
            </Nav.Link>     
          </Nav>
          <Form className=" d-flex serch-box">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <div variant="outline-success serch-btn "><img className='icon-img' src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png"></img></div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
    
     )
   }
}


