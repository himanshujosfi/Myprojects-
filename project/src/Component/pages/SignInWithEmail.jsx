import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, db } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { setDoc, doc } from 'firebase/firestore'


const SignInWithEmail = () => {
    const naviagte = useNavigate()
    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(async (result) => {
            const user = result.user
            if (result.user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    photo: user.photoURL,
                    name: user.displayName,
                })
                naviagte('/dashboard')
                console.log("User Registered Sucessfully")
            }
            console.log(result)
        })
    }
    return (
        <div><button onClick={googleLogin}>Sign In With Mail</button></div>
    )
}

export default SignInWithEmail