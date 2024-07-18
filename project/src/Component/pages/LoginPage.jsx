// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import SignInWithEmail from './SignInWithEmail';


const LoginPage = () => {
    const naviagte = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleLogin = async () => {
        const { email, password } = formData
        try {
            signInWithEmailAndPassword(auth, email, password)
            console.log("sucess")
            naviagte("/dashboard")
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <div className="actions justify-content-end mb-3">
                    <a href="Register" className="text-back-100" onClick={() => naviagte('/register')}>Register</a>
                </div>

                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Type your username" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Type your password" />
                </div>
                <div className="actions">
                    <a href="#forgot-password" className="forgot-password">Forgot password?</a>
                    <button type="submit" className="login-btn mt-2" onClick={handleLogin}>Login</button>
                </div>

                <div className="social-login mt-6">
                    <button type="submit" className="login-btn">{<SignInWithEmail />}</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
