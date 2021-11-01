import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/' >
          <h1>hey :)</h1>
        </NavLink>
        <NavMenu>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/graph'>
            Graph
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;