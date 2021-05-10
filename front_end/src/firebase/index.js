import { ContactSupportOutlined } from '@material-ui/icons';
import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";
import {useHistory} from 'react-router-dom'
import  { Redirect } from 'react-router-dom'

 
const config = {
    apiKey: "AIzaSyAkIC7eg5rEQ7Q6Z40Ek4E0u1Ts3GjtdUc",
    authDomain: "abbreviate-dictionary.firebaseapp.com",
    databaseURL: "https://abbreviate-dictionary-default-rtdb.firebaseio.com",
    projectId: "abbreviate-dictionary",
    storageBucket: "abbreviate-dictionary.appspot.com",
    messagingSenderId: "363209062072",
    appId: "1:363209062072:web:b39b3246c8e3dea447e64d",
    measurementId: "G-CRL13Q68ES"
  };
 
  const app = firebase.initializeApp(config);
  const auth =firebase.auth()
  
 
  // *** Auth API ***
 
  const doCreateUserWithEmailAndPassword = (email, password) =>
   { auth.createUserWithEmailAndPassword(email, password).
    then(res=>console.log("user created"))
    .catch(res=>{
        return <Redirect to='/'  />

    });

  }
 





  const doSignInWithEmailAndPassword = (email, password) =>{
    auth.signInWithEmailAndPassword(email, password).
    then(res=>{
      console.log("user signed in")
    })
    .catch(error=>console.log("error"));
 }
  const doSignOut = () => auth.signOut();
 
  const doPasswordReset = email => auth.sendPasswordResetEmail(email);
 
  const doPasswordUpdate = password =>{
    auth.currentUser.updatePassword(password);

}
    auth.onAuthStateChanged= firebaseUser=>{
        if(firebaseUser){
            console.log(firebaseUser)
        }

        else
        console.log("no user found")
    }
 
export default {doPasswordReset,
  doPasswordUpdate,
  doSignOut,
  doSignInWithEmailAndPassword,
  doCreateUserWithEmailAndPassword
};