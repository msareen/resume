import './App.scss';
import React from 'react';
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
