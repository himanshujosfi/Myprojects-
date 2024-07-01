import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../Firebase'
import { setDoc, doc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const SignPages = () => {
    const navigate = useNavigate()
    const [registers, setRegister] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handleRegister = () => {
        const { email, password, username } = registers
        try {
            createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            console.log(user)
            if (user) {
                setDoc(doc(db, "NewUsers", user.uid), {
                    username: username,
                    email: user.email,
                    password: password
                })
            }
            console.log('User Registered SucessFully')
        } catch (error) {
            console.log(error.message)
        }
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Register</h2>
                <div >
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" value={registers?.username} placeholder="Type your username" onChange={(e) => setRegister(pre => ({ ...pre, username: e.target.value }))} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Gmail</label>
                        <input type="email" value={registers?.email} placeholder="Type your mail" onChange={(e) => setRegister(pre => ({ ...pre, email: e.target.value }))} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Type your password" value={registers?.password} onChange={(e) => setRegister(pre => ({ ...pre, password: e.target.value }))} />
                    </div>
                    <div className="actions mt-4">
                        <button className="login-btn" onClick={handleRegister} >Register</button>
                        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default SignPages