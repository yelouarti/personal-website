import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import OfferCard from "../../components/offer-card";
import {useTranslation} from "react-i18next";
import SimpleAccordion from "../../components/simple-accordion";

const Services = () => {
    const { t } = useTranslation();
    const offerCardData = t('services.serviceOfferings.offerCardData', { returnObjects: true });
    const faqData = t('services.faq.faqAccordion', { returnObjects: true });

    return (
        <div className="main-container">
            {/* Service Offerings Section */}
            <h2>{t('services.serviceOfferings.title')}</h2>
            <p>{t('services.serviceOfferings.text')}</p>

            <div className="content-section-inter-spacer row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4 justify-content-center">
                {offerCardData.map((card, index) => (
                    <div className="col d-flex justify-content-center" key={index}>
                        <OfferCard
                            title={card.title}
                            iconName={card.iconName}
                            valueProps={card.valueProposition}
                        />
                    </div>
                ))}
            </div>

            {/* Collaboration Section */}
            <h2 className="content-section-spacer">{t('services.collaboration.title')}</h2>
            <p>{t('services.collaboration.text')}</p>

            <h3>{t('services.collaboration.idealProjects.title')}</h3>
            <ul>
                {t('services.collaboration.idealProjects.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>{t('services.collaboration.focusAreas.title')}</h3>
            <ul>
                {t('services.collaboration.focusAreas.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>{t('services.collaboration.engagementModel.title')}</h3>
            <ul>
                {t('services.collaboration.engagementModel.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h2 className="content-section-spacer">FAQ</h2>
            <p>{t('services.faq.intro')}</p>
            <SimpleAccordion
                firstCollapsed={true}
                titleContentPairList={faqData}
                className="content-section-inter-spacer"
            >
            </SimpleAccordion>
        </div>
    );
};

export default Services;