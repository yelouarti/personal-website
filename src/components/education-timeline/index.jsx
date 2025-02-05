import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import './style.css';

const EducationTimeline = ({
                               data,
                               id,
                               className
                           }) => {
    const [expandedThesis, setExpandedThesis] = useState({});

    const toggleThesis = (index) => {
        setExpandedThesis(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div
            className={`education-timeline-wrapper centered-content-container ${className}`}
            id={id}
        >
            <div className="education-timeline-container">
                {/* Vertical Timeline Line */}
                <div className="education-timeline-line" />

                {data.map((achievement, index) => (
                    <div key={index} className="education-timeline-item">
                        {/* Timeline Dot */}
                        <div className="education-timeline-dot" />

                        <div>
                            {/* Year */}
                            <div className="education-timeline-year pb-2">
                                <i className="bi bi-calendar-event"></i>
                                <span>{achievement.year}</span>
                            </div>

                            {/* Degree */}
                            <h3 className="education-timeline-degree">
                                {achievement.degree}
                            </h3>

                            {/* Institution */}
                            <p className="education-timeline-institution">
                                {achievement.institution}
                            </p>

                            {/* Location */}
                            <div className="education-timeline-location">
                                <i className="bi bi-geo-alt"></i>
                                <span>{achievement.location}</span>
                            </div>

                            {/* Description */}
                            <p className="education-timeline-description">
                                {achievement.description}
                            </p>

                            {/* Grade */}
                            <div className="education-timeline-grade">
                                <i className="bi bi-award"></i>
                                <span>{achievement.grade}</span>
                            </div>

                            {/* Thesis */}
                            <div className="education-timeline-thesis-container">
                                <div
                                    className="education-timeline-thesis-header"
                                    onClick={() => toggleThesis(index)}
                                >
                                    <p>
                                        <span>Thesis: </span>
                                        <i>{achievement.thesis.title}</i>
                                    </p>
                                    <i className={`bi bi-chevron-${expandedThesis[index] ? 'up' : 'down'} education-timeline-chevron`}></i>
                                </div>

                                <Collapse in={expandedThesis[index]}>
                                    <div className="education-timeline-thesis-content">
                                        <p className="m-0">{achievement.thesis.description}</p>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default EducationTimeline;