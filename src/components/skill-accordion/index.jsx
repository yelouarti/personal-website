import React, { useState } from "react";
import SkillArea from "./skill-area";
import './style.css';

const SkillAccordion = ({ skillSections, id, className = '' }) => {
    // Track open items in an array instead of a single value
    const [openItems, setOpenItems] = useState([0]); // Initially open the first item

    // Handle clicks on accordion headers
    const handleToggle = (index) => {
        setOpenItems(prevOpenItems => {
            // Check if the item is already open
            if (prevOpenItems.includes(index)) {
                // Remove it from open items (close it)
                return prevOpenItems.filter(item => item !== index);
            } else {
                // Add it to open items (open it)
                return [...prevOpenItems, index];
            }
        });
    };

    return (
        <div id={id} className={`accordion centered-content-container ${className}`}>
            {skillSections.map((section, index) => {
                const itemId = `collapse-${index}`;
                const isOpen = openItems.includes(index);

                return (
                    <div className="accordion-item" key={index}>
                        <div className="accordion-header">
                            <button
                                className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
                                type="button"
                                onClick={() => handleToggle(index)}
                                aria-expanded={isOpen ? 'true' : 'false'}
                                aria-controls={itemId}
                            >
                                <h3 className="m-0">{section.title}</h3>
                            </button>
                        </div>
                        <div
                            id={itemId}
                            className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
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