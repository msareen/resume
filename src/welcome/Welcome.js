import './welcome.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                                Manasvi Sareen!
                            </h3>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}