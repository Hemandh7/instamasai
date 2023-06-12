
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Signup from './components/Signup';
import Login from './components/login';
import Posts from './components/posts';


const App = () => {
  return (
    
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/posts" element={<Posts/>} />
      </Routes>
    
  );
};

export default App;
