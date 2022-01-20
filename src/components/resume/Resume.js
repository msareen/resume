import './Resume.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Icon from '../icon/Icon'
import Profile from '../profile/profile';
import AboutMe from '../about-me/AboutMe';
import Skills from '../skills/Skills';
import Experience from '../experience/Experience';
import ContactForm from '../contact-form/ContactForm';
import Details from '../details/Details';
import { getResumeData, getResumeDataInitialized } from '../../services/data.service';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion/dist/framer-motion'

export default function Resume() {
    const [isVisible, setIsVisible] = useState(false);  
    const [resumeData, setResumeData] = useState(getResumeDataInitialized())
    
    useEffect(() => {
      setTimeout(() => {
        document.getElementById('resumeMain').classList.remove('hide');
        setIsVisible(true);  
      },500);
      getResumeData().then((data) => {
        setResumeData(data);
      })
    })
   
 
    /* <GrLinkedin  style={{ height: "1.5rem", width: "1.5rem" }} /> */
 
  
    return (
      <motion.div id="resumeMain" className="background hide"  animate={{ opacity: isVisible ? 1 : 0 }}>
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
                        <Icon type={network.type} link={network.url} ></Icon>
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
                  <Profile className="border-bottom" profile={resumeData.profile}
                  ></Profile>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  <AboutMe className="border-bottom" aboutMedata={resumeData.aboutMe} ></AboutMe>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Skills className="border-bottom" skills={resumeData.professionalSkills} ></Skills>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className='background-exp'>
                  <Experience experianceData={resumeData.experiance} ></Experience>
                </Col>
              </Row>
              <Row className="mt-4 mb-4">
                <Col>
                  <ContactForm email={resumeData.email}></ContactForm>
                </Col>
                <Col>
                  <Details details={ { ...resumeData.otherDetails, ...resumeData.contactDetails} } ></Details>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </motion.div>
    );
  }