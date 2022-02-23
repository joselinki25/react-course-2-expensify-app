import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" >Go home</NavLink><br/>
    <NavLink to='/create' >Create Expense</NavLink><br/>
    <NavLink to='/help' >Help</NavLink><br/>
    <br/>
  </header>
)

export default Header;