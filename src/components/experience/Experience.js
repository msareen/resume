import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.scss'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdWork, MdSchool, MdStars } from 'react-icons/md';
import SkillTags from '../skill-tags/SkillTags'
import '../../main.scss';


export default function Experience(props) {
    return (
        <div >
            <Row>
                <Col>
                    <h4>Experience</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <VerticalTimeline>
                        {
                            ((experianceData) => {
                                if (experianceData) {
                                    console.log(experianceData);
                                    let experianceTimeLineElements = experianceData.map((experiance, index) => {
                                        if (index === 0) {
                                            return (<VerticalTimelineElement
                                                className={`vertical-timeline-element--${experiance.type.toLowerCase()}`}
                                                contentStyle={{ background: '#2196F3', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  #2196F3' }}
                                                date={experiance.date}
                                                dateClassName='current-work-date'
                                                iconStyle={{ background: '#2196F3', color: '#d2d2d2' }}
                                                icon={experiance.type === 'Work' ? <MdWork /> : <MdSchool />}
                                            >
                                                <h3 className="vertical-timeline-element-title">{experiance.heading}</h3>
                                                <h4 className="vertical-timeline-element-subtitle">{experiance.organization}</h4>
                                                <SkillTags className="bg-danger" tags={experiance?.tags}></SkillTags>
                                                <p>
                                                    {experiance.description}
                                                </p>
                                            </VerticalTimelineElement>)
                                        } else {
                                            return (<VerticalTimelineElement
                                                className={`vertical-timeline-element--${experiance.type.toLowerCase()}`}
                                                date={experiance.date}
                                                iconStyle={{ background: '#2196F3', color: '#fff' }}
                                                icon={experiance.type === 'Work' ? <MdWork /> : <MdSchool />}
                                            >
                                                <h3 className="vertical-timeline-element-title">{experiance.heading}</h3>
                                                <h4 className="vertical-timeline-element-subtitle">{experiance.organization}</h4>
                                                <SkillTags className="bg-info" tags={experiance?.tags}></SkillTags>
                                                <p>
                                                    {experiance.description}
                                                </p>
                                            </VerticalTimelineElement>)
                                        }

                                    })
                                    experianceTimeLineElements.push(
                                        <VerticalTimelineElement
                                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                            icon={<MdStars />}
                                        />
                                    )
                                    return experianceTimeLineElements;
                                }

                            })(props.experianceData)
                        }
                    </VerticalTimeline>
                </Col>
            </Row>
        </div>

    )
}