import './App.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GrLinkedin } from 'react-icons/gr';
import Profile from './profile/profile';
import About from './about/About';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import { getResumeData, getResumeDataInitialized } from './services/data.service';
import React, { useState } from 'react';

function App() {
  
  
  const [resumeData, setResumeData] = useState(getResumeDataInitialized())
  getResumeData().then((data) => {
    setResumeData(data);
  })
  
  
  return (
    <div className="background">
      <Container>
        <Row className="mt-4">
          <Col >
            <h4>{resumeData.name}</h4>
          </Col>
          <Col>
            <GrLinkedin className="float-end" style={{ height: "1.5rem", width: "1.5rem" }} />
          </Col>
        </Row>
        <Row className="mt-5 border-bottom">
          {/* Resume Space here */}
          <Col className="shadow-sm bg-white">
            <Row>
              <Col>
                <Profile className="border-bottom"
                ></Profile>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <About className="border-bottom" ></About>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Skills className="border-bottom" ></Skills>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Experience ></Experience>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Contact></Contact>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
