import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import spiderChart from "./assets/spider-chart.svg"
import SkillArea from "../../components/skill-area";
import {useTranslation} from "react-i18next";


const Expertise = () => {

    const { t } = useTranslation();
    const skillSections = t('expertise.skillAccordion', { returnObjects: true });

    return (
        <div className="main-container">
            <h2>{t("expertise.h2TechnicalExpertise")}</h2>
            <div id="technical-expertise" className="d-flex flex-column align-items-center">
                <p>
                    {t("expertise.technicalExpertiseP1")}
                </p>
                <img
                    className="content-section-spacer"
                    src={spiderChart}
                    alt="Spider chart with skill areas"
                />
                <p className="content-section-spacer">
                    {t("expertise.technicalExpertiseP2")}
                </p>
                <p>
                    {t("expertise.technicalExpertiseP3")}
                </p>

                <div className="accordion content-section-spacer" id="skill-accordion">
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
                                        <h3>{section.title}</h3>
                                    </button>
                                </div>
                                <div
                                    id={itemId}
                                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                    data-bs-parent="#skill-accordion"
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

            </div>
        </div>
    );
}

export default Expertise;