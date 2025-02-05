import React, { useState } from 'react';
import { Collapse} from 'react-bootstrap';
import './style.css';

const EducationTimeline = ({
                               data,
                               id,
                               className
                           }) => {
    const [expandedInfo, setExpandedInfo] = useState({});

    const toggleInfo = (index) => {
        setExpandedInfo(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="education-timeline-wrapper centered-content-container" id={id}>
            <div className="education-timeline-container">
                <div className="education-timeline-line"/>
                {data.map((achievement, index) => (
                    <div key={index} className="education-timeline-item">
                        <div className="education-timeline-dot"/>

                        <div>
                            <div className="education-timeline-year pb-2">
                                <i className="bi bi-calendar-event"></i>
                                <span>{achievement.year}</span>
                            </div>

                            <h3 className="education-timeline-degree">
                                {achievement.degree}

                                {achievement.description && (
                                    <button
                                        className="info-button ms-2"
                                        onClick={() => toggleInfo(index)}
                                        aria-expanded={expandedInfo[index]}
                                    >
                                        <i className={`bi bi-info-circle ${expandedInfo[index] ? 'active' : ''}`}></i>
                                    </button>
                                )}
                            </h3>

                            {/* Institution */}
                            <p className="education-timeline-institution">
                                {achievement.institution}
                            </p>

                            {/* Description now collapses here, before location */}
                            {achievement.description && (
                                <Collapse in={expandedInfo[index]}>
                                    <div className="info-content">
                                        <p className="m-0">{achievement.description}</p>
                                    </div>
                                </Collapse>
                            )}

                            {/* Location */}
                            <div className="education-timeline-location">
                                <i className="bi bi-geo-alt"></i>
                                <span>{achievement.location}</span>
                            </div>

                            {/* Grade */}
                            <div className="education-timeline-grade">
                                <i className="bi bi-award"></i>
                                <span>{achievement.grade}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


    export default EducationTimeline;