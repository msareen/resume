import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Icon from '../icon/Icon'
import Profile from '../profile/profile';
import About from '../about/About';
import Skills from '../skills/Skills';
import Experience from '../experience/Experience';
import Contact from '../contact/Contact';
import { getResumeData, getResumeDataInitialized } from '../services/data.service';
import React, { useState } from 'react';

export default function Resume() {


    const [resumeData, setResumeData] = useState(getResumeDataInitialized())
    getResumeData().then((data) => {
      setResumeData(data);
    })
  
    /* <GrLinkedin  style={{ height: "1.5rem", width: "1.5rem" }} /> */
  
    function renderIcon() {
  
      return (
  
        <Icon ></Icon>
      )
    }
  
    return (
      <div className="background">
        <Container >
          <Row className="mt-4">
            <Col >
              <h4>{resumeData.name}</h4>
            </Col>
            <Col>
              <div className="float-end">
                {
                  (() => {
                    if (resumeData) {
                      let map = resumeData.socialNetworks.map((network) =>
                        <Icon type={network.type} link={network.link} ></Icon>
                      )
                      return map
                    }
                  })()
                }
              </div>
            </Col>
          </Row>
          <Row className="mt-3 border-bottom mb-5">
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