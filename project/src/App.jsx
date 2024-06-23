import React, { useEffect, useState } from 'react';
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import Login from './Component/pages/Login';
import SignUp from './Component/pages/SignUp';
import Dasboard from './Component/pages/Dasboard';
import { auth } from './Component/Firebase'

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) =>
      setUser(user))
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard " /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path='/dashboard' element={<Dasboard />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
