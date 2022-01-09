import './welcome.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import React, { useState } from 'react';

export default function Welcome() {
    const [isVisible, setIsVisible] = useState(true);
    let navigate = useNavigate();
    
    function naviateToResume(e) {
        e.preventDefault();
        setIsVisible(false);
        setTimeout(() => {
            navigate(`/resume`);    
        }, (300));
    }
    
    return (
        <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>
            <Container className="h-100">
                    <Row className="center">
                        <Col md={5}>
                            <h1 className="typewriter">
                                Manasvi Sareen!
                            </h1>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={5}>
                            <h3 className="reveal">
                                Software Developer/Architect
                            </h3>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={5}>
                        <Button variant="primary" size="lg" active onClick={naviateToResume}>
                            Enter
                        </Button>
                        </Col>
                    </Row>
            </Container>
        </motion.div>
    )

   
}