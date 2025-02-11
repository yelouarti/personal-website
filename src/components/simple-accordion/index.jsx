import React from "react";
import './style.css';

const SimpleAccordion = ({
                             titleContentPairList,
                             firstCollapsed,
                             id,
                             className = '',
                         }) => {
    return (
        <div id={id} className={`accordion centered-content-container ${className}`}>
            {titleContentPairList.map((titleContentPair, index) => {
                const itemId = `collapse-${index}`;
                const isExpanded = index === 0 ? !firstCollapsed : false;

                return (
                    <div className="accordion-item" key={index}>
                        <div className="accordion-header">
                            <button
                                className={`accordion-button ${!isExpanded ? 'collapsed' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${itemId}`}
                                aria-expanded={isExpanded ? 'true' : 'false'}
                                aria-controls={itemId}
                            >
                                <h3 className="m-0">{titleContentPair.title}</h3>
                            </button>
                        </div>
                        <div
                            id={itemId}
                            className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
                            data-bs-parent={`#${id}`}
                        >
                            <p className="simple-accordion-content p-3">{titleContentPair.content}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SimpleAccordion;