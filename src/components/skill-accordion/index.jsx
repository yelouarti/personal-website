import React from "react";
import SkillArea from "./skill-area";
import './style.css';

const SkillAccordion = ({ skillSections, id, className = '' }) => {
        return (
            <div id={id} className={`accordion centered-content-container ${className}`}>
                {skillSections.map((section, index) => {
                    const itemId = `collapse-${index}`;
                    return (
                        <div className="accordion-item" key={index}>
                            <div className="accordion-header">
                                <button
                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${itemId}`}
                                    aria-expanded={index === 0 ? 'true' : 'false'}
                                    aria-controls={itemId}
                                >
                                    <h3 className="m-0">{section.title}</h3>
                                </button>
                            </div>
                            <div
                                id={itemId}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                data-bs-parent={`#${itemId}`}
                            >
                                <SkillArea
                                    id={`skill-area-${index}`}
                                    summary={section.summary}
                                    technicalSkills={section.technicalSkills}
                                    keyAchievements={section.keyAchievements}
                                    className={`skill-area-${section.title.toLowerCase()}`}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
};

export default SkillAccordion;