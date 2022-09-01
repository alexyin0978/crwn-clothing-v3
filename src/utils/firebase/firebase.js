// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc 
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

export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();

//google第三方登入 - 額外設定
googleProvider.setCustomParameters({
  prompt: "select_account", //每次provider被trigger, user都必須選擇1個account
});



//google第三方登入
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider); //this returns 'user'
};

//每次signin, 都會抓取db內user的資料
export const createUserDocRef = async (user) => {

  //抓取user的doc節點
  const userDocRef = doc(db, "users", user.uid);

  //透過getdoc.exist()來檢查user是否存在於db
  const userSnapShot = await getDoc(userDocRef);

  //若不存在, 則透過setdoc來將user資料寫入db
};
