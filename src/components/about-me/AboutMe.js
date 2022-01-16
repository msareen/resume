import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AboutMe(props) {
    return (
        <div className={props.className}>
            <Row >
                <Col >
                    <h3>
                        About Me
                    </h3>
                    <p>
                        {props.aboutMedata.detailDescription}
                    </p>
                </Col>
            </Row>
            {
                (() => {
                    if (props.aboutMedata && props.aboutMedata.summaryPoints) {
                        return <Row >
                            <Col >
                                <ul>
                                    {
                                        ((summaryPoints) => {
                                                let pointListElements = summaryPoints.map(
                                                    point => <li>{point}</li>
                                                )
                                                return pointListElements;
                                        })(props.aboutMedata.summaryPoints)
                                    }
                                </ul>
                            </Col>
                        </Row>
                    }
                })()
            }
        </div>

    );
}