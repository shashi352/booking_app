import './App.css';
import Home from './pages/Home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import {
  BrowserRouter,
  Route,
  Routes
}from "react-router-dom";
import React from 'react';

function App() {
  return (
    <React.Fragment>

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hotels' element={<List/>}/>
    <Route path='/hotels/:id' element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
    
    </React.Fragment>
  );
}

export default App;
