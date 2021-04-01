import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AppBarStyles = styled.nav `
box-shadow: 0 0 3px 1px grey;
  

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #4169E1;
    display: flex;
    justify-content:center;
  }
  

  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: bold;
  }
  
  /* Change the link color to #00BFFF (DeepSkyBlue) on hover */
  li a:hover {
    background-color: #00BFFF;
  }
  



`

const AppBar = () => {
    return ( 
        <AppBarStyles>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </AppBarStyles>
     );
}
 
export default AppBar;