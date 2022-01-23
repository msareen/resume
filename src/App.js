import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Resume from './components/resume/Resume';
import Welcome from './components/welcome/Welcome';

function App() {
  return(
    <Router>
       <Routes basename={'/resume'}>
         <Route path='/resume' element={<Welcome />}></Route>
         <Route exact path='/resume/main' element={<Resume />}></Route>
      </Routes>
    </Router>
   
  )
  
}

export default App;
