import './App.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Icon from './components/icon/Icon'
import Profile from './components/profile/profile';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import { getResumeData, getResumeDataInitialized } from './services/data.service';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Resume from './components/resume/Resume';
import Welcome from './components/welcome/Welcome';

function App() {
  return(
    <Router>
       <Routes>
         <Route exact path='/' element={<Welcome />}></Route>
         <Route exact path='/resume' element={<Resume />}></Route>
      </Routes>
    </Router>
   
  )
  
}

export default App;
