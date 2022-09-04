// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc
} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB498TWr2vizRll7D1xUsa3o889yd1dTA8",
  authDomain: "crwn-clothing-v3.firebaseapp.com",
  projectId: "crwn-clothing-v3",
  storageBucket: "crwn-clothing-v3.appspot.com",
  messagingSenderId: "236207162414",
  appId: "1:236207162414:web:fe889e349de974a9d58bbf",
};

const firebaseBackendApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseBackendApp); //collection -> document -> data

export const auth = getAuth(firebaseBackendApp);

export const googleProvider = new GoogleAuthProvider();

//google第三方登入 - 額外設定
googleProvider.setCustomParameters({
  prompt: "select_account", //每次provider被trigger, user都必須選擇1個account
});



//google第三方登入
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider); 
  //this returns 'user'
};

//每次signup或google signin, 都會檢查user是否需存進db
export const createUserDocRef = async ( user, additionalInfo = {}) => {

  //檢查user是否有被傳進來
  if(!user) return;

  //抓取user的doc節點
  const userDocRef = doc(db, "users", user.uid);

  //透過getdoc.exist()來檢查user是否存在於db
  const userDocSnapShot = await getDoc(userDocRef);

  //若不存在, 則為新帳戶, 需透過setdoc來將user資料寫入db
  if (!userDocSnapShot.exists()){

    const { displayName, email } = user;
    const createdAt = new Date();

    console.log(additionalInfo)

    try {
      await setDoc(userDocRef, { 
        displayName, 
        email, 
        createdAt,
        ...additionalInfo //一般signup需要額外pass displayName進來
      });

    } catch(err) {
      console.log('error creating user with google signin', err.message);
    }
  }

  //若user已經存在, 則單純return user doc
  return userDocRef;
};

//signup - with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//signin
export const signInAuthWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

//signout
export const signOutUser = async () => {
  return await signOut(auth);
};

//authListener
export const onAuthStateChangedListener = (callback) => {
  /*
  onAuthStateChanged
  執行: 在signin或signout時會被執行,
  params: 需要傳入auth以及一個callback, callback會得到'user',
  return: 會回傳一個unsubscribe function, 執行後可以停止listening,
  */
  return onAuthStateChanged(auth, callback);

  /*備註：observer(listener) pattern
  {
    next: callback,(funciton triggered when state changed)
    error: errorHandler,
    complete: completedCallback, 
  }
  */
};
