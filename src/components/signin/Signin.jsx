//hooks
import React from 'react';

//firebase
import { signInWithGooglePopup } from '../../utils/firebase/firebase';



const Signin = () => {

  //與api, db互動的function都是async
  const handleGoogleSignin = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user)
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