
import React, { useState, Component } from "react";
import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import firebaseConfig from "@/firebase/fireConfigInicial";
import { appFirebase } from "@/firebase/fireConfigInicial"
import { getAuth, signInWithPopup, linkWithPopup } from "firebase/auth"
import styles from '@/styles/Button.module.css';

//import firebase from "firebase";
//firebase.initializeApp(firebaseConfig);

const LoginButton = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(appFirebase);

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  return (
    <button onClick={handleLogin} className={styles.boton}>Login</button>
  );
};

export default LoginButton;
