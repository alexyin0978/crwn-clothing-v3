//hooks
import React, { useState, useContext } from 'react';

//context
import { UserContext } from '../../contexts/User.context';

//firebase
import {
  createAuthUserWithEmailAndPassword,
  createUserDocRef
} from '../../utils/firebase/firebase';

//components
import FormInput from '../formInput/FormInput.component';
import Button from '../button/Button.component';

//style
import './Signup.styles.scss';



const initFormVal = {
  displayName: '',
  email: '', 
  password: '',
  confirmPassword: ''
};

const Signup = () => {

  const { setCurrentUser } = useContext(UserContext);

  const [formVal, setFormVal] = useState(initFormVal);

  const {
    displayName,
    email,
    password,
    confirmPassword,
  } = formVal;

  const resetFormInput = () => {
    setFormVal(initFormVal);
  };

  const handleFormSubmit = async (evt) => {

    //取消預設, 才不會在submit後reload
    evt.preventDefault();

    if(password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      
      //非第三方登入(註冊)需要自己補上displayName
      await createUserDocRef(user, { displayName });

      setCurrentUser(user);

      //將input清空
      resetFormInput();

    } catch (err) {
      if(err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', err);
      }
    }
  };

  const handleInputChange = (evt) => {

    const {name, value} = evt.target;

    setFormVal({...formVal, [name]: value});
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={(evt) => handleFormSubmit(evt)}>

        {/* displayName */}
        <FormInput 
        label='Username'
        name='displayName' 
        type='text' 
        value={displayName}
        onChange={(evt) => handleInputChange(evt)}
        required
        />

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

        {/* confirmPassword */}
        <FormInput 
        label='Confirm Password'
        name='confirmPassword' 
        type='password' 
        value={confirmPassword}
        onChange={(evt) => handleInputChange(evt)}
        required
        />

        <Button type='submit'>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Signup;