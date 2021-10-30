import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.scss'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdWork } from 'react-icons/md';
import '../main.scss';




export default class Experience extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h4>Experience</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#2196F3', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #2196F3' }}
                                date="2011 - present"
                                iconStyle={{ background: '#2196F3', color: '#d2d2d2' }}
                                icon={<MdWork/>}
                            >
                                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2010 - 2011"
                                iconStyle={{ background: '#2196F3', color: '#fff' }}
                                icon={<MdWork/>}
                            >
                                <h3 className="vertical-timeline-element-title">Art Director</h3>
                                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2008 - 2010"
                                iconStyle={{ background: '#2196F3', color: '#fff' }}

                            >
                                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                                <p>
                                    User Experience, Visual Design
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2006 - 2008"
                                iconStyle={{ background: '#2196F3', color: '#fff' }}

                            >
                                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                <p>
                                    User Experience, Visual Design
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="April 2013"
                                iconStyle={{ background: '#e91e63', color: '#fff' }}

                            >
                                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                                <p>
                                    Strategy, Social Media
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="November 2012"
                                iconStyle={{ background: '#e91e63', color: '#fff' }}
                            >
                                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2002 - 2006"
                                iconStyle={{ background: '#e91e63', color: '#fff' }}

                            >
                                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                                <p>
                                    Creative Direction, Visual Design
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                iconStyle={{ background: '#cc5200', color: '#fff' }}

                            />
                        </VerticalTimeline>
                    </Col>
                </Row>
            </div>

        )
    }

}