import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

import FormInput from '../../src/components/forms/FormInput';
import Button from '../components/buttons/Button';
import fireBaseApp from './../firebase/firebaseConfig';
import { useState, useContext } from 'react';
import AuthContext from './../auth/AuthContext';

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

  const auth = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isValid, setIsValid] = useState(false);  

  const handleLogin = (e) =>{
    fireBaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const userid = userCredential.user.uid;
      // auth
      setIsValid(true)
     
      auth.authenticated = isValid
      
      
    })
    .catch(error =>{
      console.log(error.code, error.message)
      setIsValid(false)
    })

  }

  if(isValid)
  {
     auth.authenticated = true;
     return <Redirect to="/dashboard"/>
  }
  else
  {
    
    return(
        
        <LoginPageStyles>
   
           <header>
   
           <h1>Login</h1>
           <br/>
           <p>It takes a few seconds</p>
   
           </header>
   
           <FormInput inputType="email" label="email address" onChange={(e) => setEmail(e.target.value.trim())}/>
              
           <FormInput inputType="password" label="password"  onChange={(e) => setPassword(e.target.value.trim())}/>

           <Button onClick={handleLogin} label="sign in" uiStyle="login"/>
           
   
        </LoginPageStyles>
   
       )
  }
}




export default LoginPage