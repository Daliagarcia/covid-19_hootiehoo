import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from "../Img/logo.jpg";

const Styles = styled.div`
.navbar {
   background-color: #72BAEC; 
}

.navbar-brand, .navbar-nav .nav-link {
color: white;
0
&:hover {
    color: black;
  }

 }
`;

export const NavBar = () => (
    <Styles>
        <Navbar expand='lg'>
            
           <Navbar.Brand href='/'> 
                <img src={logo} alt="Hootie Hoo" width='80px'/> 
           </Navbar.Brand>

        <Navbar.Toggle aría-controls='basic-navbar-nav' />

         <Navbar.Collapse id='Basic-navbar-nav'>

            <Nav className='ml-auto'>
                <Nav.Item><Nav.Link href='/'>Inicio</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/About'>Nosotros</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/Contacts'>Contacto</Nav.Link></Nav.Item><Nav.Item>
                    </Nav.Item>
            </Nav>
         </Navbar.Collapse>

        </Navbar>
    </Styles>
);