import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './Login';
import Protected from './Protected';
import './App.css'
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route 
            path="/" 
            element={<Login setIsAuthenticated={setIsAuthenticated} />} 
          />

          <Route 
            path="/protected" 
            element={isAuthenticated ? <Protected /> : <Navigate to="/" />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
