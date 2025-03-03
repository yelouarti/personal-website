import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';

const MainTemplateHero = ({
                              title,
                              tagline,
                              image,
                              backgroundColor,
                              textColor,
                              className
                          }) => {
    return (
        <div
            className={`main-template-hero ${className || ''}`}
            style={{
                backgroundColor: backgroundColor || '#f8f9fa',
                color: textColor || '#212529'
            }}
        >
            <div className="main-container w-100">
                <div className="hero-content-row">
                    <div className="hero-text-column">
                        <h1 className="hero-title m-0">{title}</h1>
                        <p className="hero-tagline m-0">{tagline}</p>
                    </div>
                    <div className="hero-image-column">
                        <img
                            src={image}
                            alt={title}
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainTemplateHero;