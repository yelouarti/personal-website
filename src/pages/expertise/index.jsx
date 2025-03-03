import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import spiderChartBig from "./assets/spider-chart.svg"
import spiderChartSmall from "./assets/spider-chart-s.svg"
import {useTranslation} from "react-i18next";
import EducationTimeline from "../../components/education-timeline";
import Certificates from "../../components/certificates";
import SkillAccordion from "../../components/skill-accordion";
import MainTemplateHero from "../../components/hero/main-template";


const Expertise = () => {

    const { t } = useTranslation();
    const skillSections = t('expertise.skillAccordion', { returnObjects: true });
    const educationSection = t('expertise.education.degrees', { returnObjects: true });
    const certificationSection = t('expertise.certifications.cards', { returnObjects: true });
    return (
        <div>
            <MainTemplateHero title="Expertise"
                              tagline="Lorem impsum dolor asit amit"
                              image={spiderChartBig}></MainTemplateHero>
            <div className="main-container">
                <h2>{t("expertise.h2TechnicalExpertise")}</h2>
                <div id="technical-expertise" className="d-flex flex-column align-items-center">
                    <p>
                        {t("expertise.technicalExpertiseP1")}
                    </p>
                    <picture className="content-section-inter-spacer" id="skill-spider-chart">
                        <source media="(min-width: 768px)" srcSet={spiderChartBig}/>
                        <img src={spiderChartSmall} alt="Spider chart with skill areas"/>
                    </picture>

                    <p className="content-section-inter-spacer">
                        {t("expertise.technicalExpertiseP2")}
                    </p>
                    <p>
                        {t("expertise.technicalExpertiseP3")}
                    </p>

                    <SkillAccordion
                        skillSections={skillSections}
                        id="skill-accordion-section"
                        className="content-section-inter-spacer"
                    />

                </div>

                <h2 className="content-section-spacer">{t("expertise.h2Education")}</h2>
                <p>{t("expertise.education.introduction")}</p>
                <EducationTimeline
                    data={educationSection}
                    id="education-section"
                    className="content-section-inter-spacer"
                />

                <h2 className="content-section-spacer pt-4">{t("expertise.h2Certification")}</h2>
                <p>{t("expertise.certifications.introduction")}</p>
                <Certificates
                    certifications={certificationSection}
                    id="certification-section"
                    className="content-section-inter-spacer"
                />
            </div>
        </div>
    );
}

export default Expertise;