//hooks
import React from 'react';

//firebase
import { 
  signInWithGooglePopup,
  createUserDocRef,
} from '../../utils/firebase/firebase';



const Signin = () => {

  //與api, db互動的function都是async
  const handleGoogleSignin = async () => {

    const { user } = await signInWithGooglePopup();

    createUserDocRef(user);

    console.log('test')

  };

  return (
    <div>
      <button onClick={handleGoogleSignin}>
        sign in with google popup
      </button>
    </div>
  )
}

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