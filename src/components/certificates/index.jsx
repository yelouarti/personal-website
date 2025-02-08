import React from 'react';
import awsLogo from './assets/aws-logo.svg';
import scrumOrgLogo from './assets/scrumorg-logo.svg';
import agileInstituteLogo from './assets/agile-institute-logo.svg';
import axelosLogo from './assets/axelos-logo.svg';
import './style.css';

const Certificates = ({ certifications, id, className = '' }) => {
    const logoMap = {
        'aws-logo': awsLogo,
        'scrumorg-logo': scrumOrgLogo,
        'agile-institute-logo': agileInstituteLogo,
        'axelos-logo': axelosLogo
    };


    return (
        <div id={id} className={`row g-4 centered-content-container ${className}`}>
            {certifications.map((cert, index) => (
                <div key={index} className="col-12">
                    <div className="cert-card card d-flex justify-content-center">
                        <div className="row g-0">
                            <div className="col-md-2 col-3 d-flex justify-content-center align-items-center">
                                <div className="cert-logo-container d-flex">
                                    <img
                                        src={logoMap[cert.logo]}
                                        alt={`${cert.issuer} logo`}
                                        className="cert-logo"
                                    />
                                </div>
                            </div>
                            <div className="col-md-10 col-9">
                                <div className="p-2">
                                    <h3 className="cert-title mt-2 mb-1">{cert.title}</h3>
                                    <p className="cert-issuer mb-2">{cert.issuer}</p>
                                    <p className="cert-description mb-0">{cert.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certificates;