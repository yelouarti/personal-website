import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';


const SkillsOverviewCard = ({id, title,  icon, tagLine, className}) => {
    return (
        <div id={id} className={`skills-overview-card-default d-flex flex-column ${className}`}>
            <div>
                <h3>{title}</h3>
            </div>

            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <img src={icon} alt={title}/>
            </div>

            <div className="mt-auto">
                <p>{tagLine}</p>
            </div>
        </div>
    );
}

export default SkillsOverviewCard;