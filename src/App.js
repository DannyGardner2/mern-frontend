import React from 'react';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/users" element={<List />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser" element={<Edituser />} />
      </Routes>
      <div>
        <h1>Sorry our site sucks</h1>
      </div>
    </div>
  );
}

export default App;
