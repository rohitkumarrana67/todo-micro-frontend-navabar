import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {links} from './nav-links';
import {Link} from '@reach/router'



const NavbarComponent = ( ) => {
    return (
        <div style={{height:"7vh"}}>
            <Navbar bg="secondary" expand="lg" style={{height:"100%"}}>
              <Navbar.Brand style={{color: "white"}} href="#home">MICRO-FRONTEND</Navbar.Brand>
                {links.map((link) => {
                  return (
                    <Nav.Link > 
                      <Link  style={{color: "white", textDecoration:"none"
                    }} key={link.href}  to={link.href}> {link.name}</Link>
                    </Nav.Link>
                    );
                })}
            </Navbar>
        </div>
    )
}

export  default NavbarComponent;