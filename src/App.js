import './App.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Icon from './icon/Icon'
import Profile from './profile/profile';
import About from './about/About';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import { getResumeData, getResumeDataInitialized } from './services/data.service';
import React, { useState } from 'react';
import Resume from './resume/Resume';
import Welcome from './welcome/Welcome';

function App() {
  return(<Welcome></Welcome>)
  
}

export default App;
