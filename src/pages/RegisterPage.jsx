import React from 'react';
import styled from 'styled-components';

import FormInput from '../../src/components/forms/FormInput';
import Button from '../components/buttons/Button';

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
    return(

        <RegisterPageStyles>

            <header>

             <h1>Register</h1>
             <br/>
             <p>No CR Required</p>
          
            </header>
            
            <FormInput inputType="text" label="name on the account"/>
           
            <FormInput inputType="email" label="valid email address"/>
           
            <FormInput inputType="password" label="password (8 characters)"/>
           
            <Button label="create account" uiStyle="signup"/>
           
        </RegisterPageStyles>
    )
}

export default RegisterPage