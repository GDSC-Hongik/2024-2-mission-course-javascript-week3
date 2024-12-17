import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login.jsx';
import Succeed from './Succeed.jsx';
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Login />} />
          <Route path = '/succeed' element={<Succeed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
