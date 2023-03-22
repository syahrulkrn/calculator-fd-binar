import React from 'react';
import './App.css'
import Home from "./pages/Home";
import Calculator from "./pages/Form";
import About from './pages/About'
import Contact from './pages/Contact'
import CreateForm from './pages/CreateUser'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App(){
  return(
    <>
<Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/calculator' element={<Calculator/>} />
        <Route path='/create-user' element={<CreateForm/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
    </>
  )
}