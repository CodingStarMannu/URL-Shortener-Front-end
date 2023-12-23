import React from 'react';
import "./App.css";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';  
import Url from './components/Url';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/url" element={<Url/>} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
