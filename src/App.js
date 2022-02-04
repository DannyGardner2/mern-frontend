import React from 'react';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Adduser from './components/Adduser';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"/>
        <Route path="/users" element={<List />} />
        <Route path="/adduser" element={<Adduser />} />
      </Routes>
    </div>
  );
}

export default App;
