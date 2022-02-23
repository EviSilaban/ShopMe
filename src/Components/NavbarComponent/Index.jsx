import React, { Component } from 'react';
import '../../App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from '../../Views/HomeView/Index'

const Index = () => {
    return (
        <Router>
            <header>
                <nav>
                    <Link className="active logo" to="/">Home</Link>
                    <select className="bahasa" >
                        <option value="in">Indonesia</option>
                        <option value="en">English</option>
                    </select>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </header>
        </Router>

    )
}

export default Index;




