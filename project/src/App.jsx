import React, { useEffect, useState } from 'react';
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, useToast } from "react-toastify"
// import Login from './Component/pages/Login';
// import SignUp from './Component/pages/SignUp';
// import Dasboard from './Component/pages/Dasboard';
// import { auth } from './Component/Firebase'
import LoginPage from './Component/pages/LoginPage';
import SignPages from './Component/pages/SignPages';
import "./index.css"
import Dashboard from './Component/pages/Dasboard';
import { auth } from './Component/Firebase';

const App = () => {
  const [user, setUser] = useState()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={LoginPage ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignPages />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
