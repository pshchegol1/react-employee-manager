import React, {useState} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

import FormInput from '../../src/components/forms/FormInput';
import Button from '../components/buttons/Button';
import firebaseApp from './../firebase/firebaseConfig';

const RegisterPageStyles = styled.div `

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

const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegister = (e) =>{
      firebaseApp.auth().createUserWithEmailAndPassword(email,password)
      .then((userCredential) =>{

         setIsRegistered(true);

      })
      .catch((error)=>{
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode,errorMessage)
        setIsRegistered(false);
      })
    }

    if(isRegistered)
    {
        return <Redirect to="/login"/>
    }
    else
    {
      return(

        <RegisterPageStyles>

            <header>

             <h1>Register</h1>
             <br/>
             <p>No CR Required</p>
          
            </header>
            
            <FormInput inputType="text" label="name on the account" onChange={(e) => setUsername(e.target.value.trim())}/>
           
            <FormInput inputType="email" label="valid email address" onChange={(e) => setEmail(e.target.value.trim())}/>
           
            <FormInput inputType="password" label="password (8 characters)" onChange={(e) => setPassword(e.target.value.trim())}/>
           
            <Button onClick={handleRegister} label="create account" uiStyle="signup"/>
           
        </RegisterPageStyles>
    )
    }



}

export default RegisterPage