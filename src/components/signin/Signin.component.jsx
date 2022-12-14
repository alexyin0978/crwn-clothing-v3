//hooks
import React, { useState } from 'react';

//firebase
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase';

//components
import FormInput from '../formInput/FormInput.component';
import Button from '../button/Button.component';

//style
import './Signin.styles.scss';



const initFormVal = {
  email: '', 
  password: '',
};

const Signin = () => {

  const [formVal, setFormVal] = useState(initFormVal);

  const {
    email,
    password,
  } = formVal;

  const resetFormInput = () => {
    setFormVal(initFormVal);
  };

  const handleFormSubmit = async (evt) => {

    //取消預設, 才不會在submit後reload
    evt.preventDefault();

    try {

      signInAuthWithEmailAndPassword(email, password);

      //setCurrentUser與寫入db都由onAuthStateChangedListener統一執行

      //將input清空
      resetFormInput();

    } catch (err) {
      switch(err.code) {
        case 'auth/wrong-password': 
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(err)
      }
    }
  };

  //與api, db互動的function都是async
  const handleGoogleSignin = async () => {

    await signInWithGooglePopup();

    //setCurrentUser與寫入db都由onAuthStateChangedListener統一執行

  };

  const handleInputChange = (evt) => {

    const {name, value} = evt.target;

    setFormVal({...formVal, [name]: value});
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(evt) => handleFormSubmit(evt)}>

        {/* email */}
        <FormInput 
        label='Email'
        name='email' 
        type='email' 
        value={email}
        onChange={(evt) => handleInputChange(evt)}
        required
        />

        {/* password */}
        <FormInput 
        label='Password'
        name='password' 
        type='password' 
        value={password}
        onChange={(evt) => handleInputChange(evt)}
        required
        />

        <div className='buttons-container'>
          <Button 
          type='submit'
          onClick={handleFormSubmit}>
            Signin
          </Button>
          <Button 
          buttonType='google'
          type='button' 
          onClick={handleGoogleSignin}>
            Google Signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;

/*
user(感覺會用到的東西)
{
  accessToken: ...,
  displayName: ...,
  email: ...,
  photoURL: https://...,
  stsTokenManager: {
    accessToken: 同上,
    expirationTime: ...,
    refreshToken: ...,
    isExpired: false,
  },
  uid: ...
}
*/