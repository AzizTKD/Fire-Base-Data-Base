import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from './firebase.js'

document.getElementById('signup_form').addEventListener('submit', (e) => {
    e.preventDefault()  
    // let name = document.querySelector('.name_signup')
    // let email = document.querySelector('.email_signup')
    // let pass = document.querySelector('.pass_signup')

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email.value, password.value)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // ..
    //     });
    // console.log(email.value, name.value, pass.value);
})

