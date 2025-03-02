import React from 'react';
import './style.css';

const OfferCard = ({ iconName, title, valueProps, className = '', id }) => {
    return (
        <div className={`offer-card d-flex flex-column p-3 my-3 ${className}`} id={id}>
            <div className="offer-card-header d-flex flex-column align-items-center mb-5">
                <i className={`bi bi-${iconName} title-icon mt-1`}></i>
                <h3 className="mt-0">{title}</h3>
            </div>
            <div className="value-props d-flex flex-column align-items-start gap-3 mt-1">
                {valueProps.map((prop, index) => (
                    <div key={index} className="d-flex justify-content-start">
                        <i className="bi d-flex bi-check-lg check-icon me-3 mt-1"></i>
                        <span>{prop}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfferCard;