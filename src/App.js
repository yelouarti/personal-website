import React from "react";
import './App.css';
import Header from './components/header';
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Expertise from "./pages/expertise";
import Projects from "./pages/projects";
import {Routes, Route} from "react-router-dom";
import Services from "./pages/services";


function App() {
    return (
            <div className="app">
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/expertise" element={<Expertise/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>

                <Footer/>
            </div>
    );
}

export default App;
