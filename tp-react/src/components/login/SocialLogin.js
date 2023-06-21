import { appFirebase } from "@/firebase/fireConfigInicial"
import { getAuth, signInWithPopup, linkWithPopup } from "firebase/auth"
import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth"

export default function SocialLogin() {

    const googleProvider = new GoogleAuthProvider();
    //const facebookProvider = new FacebookAuthProvider(); const twitterProvider = new TwitterAuthProvider();

    function doLogin( provider ) {
        const auth = getAuth(appFirebase);
        signInWithPopup(auth, provider )
        .then( (credentials) => {
            const user = credentials.user;
            console.log(user);
        } )
        .catch( (error)=>{
            const erroCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        } )
    }

    return(
    <>
        <button 
            className="btn btn-primary" 
            onClick={ () => doLogin(googleProvider) }>
            Sign in With Google Account..
        </button>
        <br></br>
        
        <br></br>
       
    </>
    )
}