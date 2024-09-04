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
                            ((experienceData) => {
                                if (experienceData) {
                                    console.log(experienceData);
                                    let experienceTimeLineElements = experienceData.map((experience, index) => {
                                        if (index === 0) {
                                            return (<VerticalTimelineElement
                                                className={`vertical-timeline-element--${experience.type.toLowerCase()}`}
                                                contentStyle={{ background: '#2196F3', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  #2196F3' }}
                                                date={experience.date}
                                                dateClassName='current-work-date'
                                                iconStyle={{ background: '#2196F3', color: '#d2d2d2' }}
                                                icon={experience.type === 'Work' ? <MdWork /> : <MdSchool />}
                                            >
                                                <h3 className="vertical-timeline-element-title">{experience.heading}</h3>
                                                <h4 className="vertical-timeline-element-subtitle">{experience.organization}</h4>
                                                <SkillTags className="bg-danger" tags={experience?.tags}></SkillTags>
                                                <p>
                                                    {experience.description}
                                                </p>
                                            </VerticalTimelineElement>)
                                        } else {
                                            return (<VerticalTimelineElement
                                                className={`vertical-timeline-element--${experience.type.toLowerCase()}`}
                                                date={experience.date}
                                                iconStyle={{ background: '#2196F3', color: '#fff' }}
                                                icon={experience.type === 'Work' ? <MdWork /> : <MdSchool />}
                                            >
                                                <h3 className="vertical-timeline-element-title">{experience.heading}</h3>
                                                <h4 className="vertical-timeline-element-subtitle">{experience.organization}</h4>
                                                <SkillTags className="bg-info" tags={experience?.tags}></SkillTags>
                                                <p>
                                                    {experience.description}
                                                </p>
                                            </VerticalTimelineElement>)
                                        }

                                    })
                                    experienceTimeLineElements.push(
                                        <VerticalTimelineElement
                                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                            icon={<MdStars />}
                                        />
                                    )
                                    return experienceTimeLineElements;
                                }

                            })(props.experienceData)
                        }
                    </VerticalTimeline>
                </Col>
            </Row>
        </div>

    )
}