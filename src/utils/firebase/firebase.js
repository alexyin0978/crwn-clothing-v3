// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
