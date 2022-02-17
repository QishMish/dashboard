/** @format */

import React from 'react';
import './style/dist/index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <Header />
      </div>
    </>
  );
}

export default App;
