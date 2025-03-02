import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="main-container">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.introduction')}</p>

            <div id="send-email-btn" className="pt-3 d-flex justify-content-center">
                <a href="mailto:contact@elouarti.net"
                   className="std-btn">
                    {t('contact.emailButton')}
                </a>
            </div>

            <div className="content-section-inter-spacer contact-details row gy-4">
                <div className="col-md-12">
                    <div className="mb-4 d-flex">
                        <div className="me-3">
                            <i className="bi bi-envelope icon-primary"></i>
                        </div>
                        <div>
                            <h3>{t('contact.contactDetails.email.title')}</h3>
                            <p>{t('contact.contactDetails.email.value')}</p>
                        </div>
                    </div>

                    <div className="mb-4 d-flex">
                        <div className="me-3">
                            <i className="bi bi-clock icon-primary"></i>
                        </div>
                        <div>
                            <h3>{t('contact.contactDetails.processingTime.title')}</h3>
                            <p>{t('contact.contactDetails.processingTime.description')}</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="me-3">
                            <i className="bi bi-telephone icon-primary"></i>
                        </div>
                        <div>
                            <h3>{t('contact.contactDetails.phone.title')}</h3>
                            <p>{t('contact.contactDetails.phone.description')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="content-section-spacer">{t('contact.expertise.title')}</h3>
            <p>{t('contact.expertise.description1')}</p>
            <p>{t('contact.expertise.description2')}</p>

            <div className="mt-4 d-flex flex-column link-container">
                <a href="/services" className="link-primary d-inline-flex align-items-center mb-3 mb-sm-2">
                    <i className="bi bi-arrow-right me-2"></i>
                    <span>{t('contact.links.services')}</span>
                </a>
                <a href="/expertise" className="link-primary d-inline-flex align-items-center mb-3 mb-sm-3">
                    <i className="bi bi-arrow-right me-2"></i>
                    <span>{t('contact.links.expertise')}</span>
                </a>
            </div>
        </div>
    );
};

export default Contact;