// Login.js
import React, { useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "@/firebase/fireConfigInicial";

import { appFirebase } from "@/firebase/fireConfigInicial"
import { getAuth, signInWithPopup, linkWithPopup } from "firebase/auth"
import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth"

//import firebaseui from 'firebaseui';
// Login.js
//var ui = new firebaseui.auth.AuthUI(firebase.auth());

/*if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  */
  const LoginAi = () => {
    useEffect(() => {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        //const app = initializeApp(firebaseConfig);
      }
    }, []);

//const auth = firebase.auth();
const auth = getAuth(appFirebase);

// Login.js

const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        // El inicio de sesión fue exitoso, puedes realizar acciones después del inicio de sesión aquí
      })
      .catch((error) => {
        // Se produjo un error durante el inicio de sesión
        console.error(error);
      });
  };
  
  // Login.js
//<button onClick={signInWithGoogle}>Iniciar sesión con Google</button>

//const LoginAi = () => {
    return (
      <div>
        <h2>Iniciar sesión</h2>
        <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
      </div>
    );
  };
  
  export default LoginAi;
