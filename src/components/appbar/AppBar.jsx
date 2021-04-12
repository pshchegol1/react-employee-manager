import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import firebaseApp from './../../firebase/firebaseConfig';


const AppBarStyles = styled.nav `
    box-shadow: 0 0 3px 1px grey;
    position: relative;
    z-index:1;
  

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

      li button
      {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-weight: bold;
        background-color: #4169E1;
        border-radius: 20px;
      }
    
  



`

const AppBar = () => {
  const handleLogOut =() =>{
    firebaseApp.auth().signOut()
  }
    return ( 
        <AppBarStyles>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>sign out</button></li>
            </ul>
        </AppBarStyles>
     );
}
 
export default AppBar;