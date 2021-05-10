import React, {useState}from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

  } from 'reactstrap';

  const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

      return ( 
    
            <div>
                <Navbar className="navbar-container" color="light" light expand="md">
                    <NavbarBrand href="/">Company Logo</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="m-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            
                        </Nav>
                    
                    </Collapse>
                </Navbar>
            </div>
         );
       
  }
   
  export default NavBar;
