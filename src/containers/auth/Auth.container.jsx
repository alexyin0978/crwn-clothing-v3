//hooks
import React from 'react'

//components
import Signin from '../../components/signin/Signin.component';
import Signup from '../../components/signup/Signup.component';

//styles
import './Auth.styles.scss';



const Auth = () => {
  return (
    <div className='authentication-container'>
      <Signin />
      <Signup />
    </div>
  )
}

export default Auth;

/*

user -> signin

Google -> give 'auth token' -> user

user -> give 'auth token' -> firebase

firebase -> give 'auth token' -> Google

Google -> check the 'auth token'

Google -> if pass, give 'verify token' -> firebase

firebase -> once receive 'verify token', generate 'access token' -> user

user -> after receive 'access token', can make CRUD request to firebase

*/