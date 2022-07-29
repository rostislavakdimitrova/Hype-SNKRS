import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import { AuthProvider } from './contexts/AuthContext';

import { Signin } from './components/Signin/Signin';
import { Signup } from './components/Signup/Signup';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { AdminDashboard } from './components/AdminDashboard/AdminDashboard';
import { NotFound } from './components/NotFound/NotFound';
import { Logout } from './components/Logout/Logout';

function App() {
    const [ showNavigation, setShowNavigation ] = useState(true);
    
    return (
        <>
        {showNavigation &&
            <Navigation />
        }
        <div className="App">
            <Routes>
                <Route path="/" element={<Home showNav={setShowNavigation} />} />
                <Route path="/signup" element={<Signup showNav={setShowNavigation} />} />
                <Route path="/signin" element={<Signin showNav={setShowNavigation} />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/admin' element={<AdminDashboard showNav={setShowNavigation} />} />
                <Route path='/404' element={<NotFound showNav={setShowNavigation} />} />
                <Route path="*" element={<NotFound showNav={setShowNavigation} />} />
                {/*
                
                <Route path="/my-account" element={<Account />} />
                <Route path="/about" element={<About />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
    */}
            </Routes>
            <ToastContainer hideProgressBar={true} />
        </div>
        </>
    );
}

export default App;
