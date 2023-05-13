import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">COZA STORE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto" >
          <Nav.Link href="/Home" >Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#signup">Sign up</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

</>
  )
}

function Footer (){
  return (
    <>
    <footer style={{ backgroundColor: "black", padding: '50px 0', fontFamily:"sans-serif" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{color:"#FFFFFF"}}>
            <h3>Contact Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut ante eleifend, bibendum tellus ac, consequat massa. Mauris in velit vitae nisl fringilla congue.</p>
          </div>
          <div className="col-md-6" style={{color:"#FFFFFF"}}>
            <h3 >Subscribe to our Newsletter</h3>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <input
                type="text"
                placeholder="Enter your email here..."
                style={{ marginRight: '10px', padding: '5px', borderRadius: '3px', border: 'none', width: '70%' }}
              />
              <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', borderRadius: '3px', border: 'none' }}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};







export {Header,Footer};
