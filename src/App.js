/** @format */

import React from 'react';
import './style/dist/index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Routes>
        {/* <div className='flex'>
          <Sidebar />
          <Header />
        </div> */}
        <Route path='/' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
