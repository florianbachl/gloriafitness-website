import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const auth = getAuth()
const user = auth.currentUser;

export async function signingin(email, password) {
    return await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //console.log("I am in signing in")
            //console.log(userCredential.user)
            return userCredential.user;

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
}

export async function signingout() {
    await signOut(auth).then(() => {
        //console.log("Signout Successful")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    });
}

export async function isLoggedIn() {

    if (user) {
        return true
    } else {
        return false
    }

}