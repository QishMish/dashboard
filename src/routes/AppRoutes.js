import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SignIn from '../pages/SignIn';

function AppRoutes() {
  return (
    <>
    <Routes>
        <Sidebar />
        <Header />
        <Route path='/' element = {<SignIn />} />
    </Routes>
    </>
  )
}

export default AppRoutes