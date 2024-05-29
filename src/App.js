import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MenuA from './components/MenuA';
import MenuB from './components/MenuB';
import MenuC from './components/MenuC';
import MenuD from './components/MenuD';
import MenuE from './components/MenuE';
import './App.css';
function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/menuA" element={<MenuA />} />
            <Route path="/menuB" element={<MenuB />} />
            <Route path="/menuC" element={<MenuC />} />
            <Route path="/menuD" element={<MenuD />} />
            <Route path="/menuE" element={<MenuE />} />
            <Route path="/" element={<MenuA />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;










