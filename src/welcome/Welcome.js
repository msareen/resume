import './welcome.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Welcome() {
    return (
        <div>
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
                        <Button variant="primary" size="lg" active>
                            Enter 
                        </Button>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}