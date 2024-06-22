import React from 'react';
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/pages/Login';
import SignUp from './Component/pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
