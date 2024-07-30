import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Bookspace from './components/BookSpace';
import Bookroom from './components/BookRoom';
import Bookdesk from './components/Desk';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';
import Desk from './components/Desk';

library.add(fas);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /><hr/>
        <div className="home-page">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/bookspace" element={<Bookspace />} />
            <Route path="/bookroom" element={<Bookroom />} />
            <Route path="/bookdesk" element={<Desk />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
