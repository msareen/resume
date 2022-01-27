import './Resume.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Profile from '../profile/profile';
import AboutMe from '../about-me/AboutMe';
import Skills from '../skills/Skills';
import Experience from '../experience/Experience';
import ContactForm from '../contact-form/ContactForm';
import Details from '../details/Details';
import Header from '../header/Header';
import Footer from '../footer/Footer';
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
    }, 500);
    getResumeData().then((data) => {
      setResumeData(data);
    })
  })


  return (
    <motion.div id="resumeMain" className="background hide" animate={{ opacity: isVisible ? 1 : 0 }}>
      <Container >
        <Header className="mt-4" name={resumeData.name} socialNetworks={resumeData.socialNetworks} ></Header>
        <Row className="mt-3 border-bottom mb-5">
          {/* Resume Space here */}
          <Col className="shadow-lg bg-white">
            <Row>
              <Col>
                <Profile profile={resumeData.profile}
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
                <Skills skills={resumeData.professionalSkills} ></Skills>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className='background-exp'>
                <Experience experianceData={resumeData.experiance} ></Experience>
              </Col>
            </Row>
            <Row className="mt-4 mb-4">
              <Col md={6}>
                <ContactForm email={resumeData?.contactDetails.email}></ContactForm>
              </Col>
              <Col md={6}>
                <Details details={{ ...resumeData.otherDetails, ...resumeData.contactDetails }} ></Details>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer name={resumeData.name} projectDetails={resumeData.projectDetails}></Footer>
          </Col>
        </Row>
      </Container>
    </motion.div>

  );
}