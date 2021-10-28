import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(from)

    const handleGoogleSignIn = () => {
        
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var { displayName, email } = result.user;
                const signedInUser = { displayName, email };
                setLoggedInUser(signedInUser);
                console.log(signedInUser)
                history.replace(from);
            })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode)
            const errorMessage = error.message;
            console.log(errorMessage)
            // The email of the user's account used.
            const email = error.email;
            console.log(email)
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            console.log(credential)
            // ...
        });
    }
    const styles = {
        width: '268px',
        height: '54px',
        borderRadius: '40px',
        backgroundColor: '#e2e2e2'
    }
    const gogleIcon = {
        width: '20px',
        marginRight: '10px',
    }
    return (
        <>
            <div className="container">
                <div className="mt-5">
                    <h1 className="text-center text-capitalize">welcome, please login first</h1>
                </div>
                <div className="mt-5 justify-content-center align-items-center d-flex">
                    <button className="btn-light border-0 btn-google m-auto" style={styles} onClick={handleGoogleSignIn}><img src="https://image.flaticon.com/icons/png/512/281/281764.png"  alt="icon" style={gogleIcon}/> Google</button>
                </div>
            </div>
        </>
    );
};

export default Login;