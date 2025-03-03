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
            <div className="main-container w-100 px-5">
                <Row className="hero-content-row">
                    <Col xs={12} lg={6} className="hero-text-column">
                        <h1 className="hero-title">{title}</h1>
                        <p className="hero-tagline">{tagline}</p>
                    </Col>
                    <Col xs={12} lg={6} className="hero-image-column">
                        <img
                            src={image}
                            alt={title}
                            className="hero-image"
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default MainTemplateHero;