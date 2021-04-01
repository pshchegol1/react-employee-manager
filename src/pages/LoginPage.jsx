import React from 'react';
import styled from 'styled-components';
import FormInput from '../../src/components/forms/FormInput';
import Button from '../components/buttons/Button';
import {Link} from 'react-router-dom';
import fireBaseApp from './../firebase/firebaseConfig';

const LoginPageStyles = styled.div `

max-width: 480px;
margin: 6rem auto 0;

h1
{
  font-size: 2rem;
  font-weight: 600;
}

header
{
  text-align:center;
  margin-bottom: 2rem;  
}



`


const LoginPage = (props) => {

  const handleLogin = (e) =>{
    fireBaseApp.auth().signInWithEmailAndPassword('pavs@yahoo.com', '123456')
    .then(userCredential => {
      console.log(userCredential)
      console.log(userCredential.user.email)
    })
  }



    return(
        
        <LoginPageStyles>
   
           <header>
   
           <h1>Login</h1>
           <br/>
           <p>It takes a few seconds</p>
   
           </header>
   
           <FormInput inputType="email" label="email address"/>
              
           <FormInput inputType="password" label="password"/>

           <Button onClick={handleLogin} label="sign in" uiStyle="login"/>
           
   
        </LoginPageStyles>
   
       )
}




export default LoginPage