import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import spiderChartBig from "./assets/spider-chart.svg"
import spiderChartSmall from "./assets/spider-chart-s.svg"
import SkillArea from "../../components/skill-area";
import {useTranslation} from "react-i18next";
import EducationTimeline from "../../components/education-timeline";

const educationData = [
    {
        degree: "M.Sc. High Integrity Systems (Berufsbegleitend)",
        description: "Informatik mit Schwerpunkt auf formalen Methoden, IT-Security, sicherheitskritischen Systemen und Datenanalyse",
        institution: "Frankfurt University of Applied Sciences",
        location: "Frankfurt am Main, Deutschland",
        year: "2014 - 2018",
        grade: "1.5",
        thesis: {
            title: 'Konzeptentwurf zur Digitalisierung einer Kindertagesstätte unter Anwendung von Actor-Actor Systems Engineering.',
            description: "In der Thesis wurde ein Proof-of-Concept des AASE-Ansatzes, eines HMI/UX-Vorgehensmodells auf Basis psychologischer und mathematischer Prinzipien, zur Erstellung eines Digitalisierungskonzepts für eine Bildungseinrichtung umgesetzt. Dabei wurden eine modulare Systemarchitektur konzipiert, Digitalisierungspotenziale identifiziert und modelliert sowie ein UX/UI-Prototyp entwickelt und durch Usability-Tests validiert."
        }
    },
    {
        degree: "B.Eng. Ingenieur Informatik",
        description: "Kombination aus Informatik und Ingenieurwissenschaften mit Fokus auf Softwareentwicklung, Hardware-Design und technische Modellierung",
        institution: "Frankfurt University of Applied Sciences",
        location: "Frankfurt am Main, Deutschland",
        year: "2011 - 2014",
        grade: "1.4",
        thesis: {
            title: 'Realisierung eines Tools in JavaFX zur Aufzeichnung von CAN-Botschaften mehrerer Motorsteuergeräte während eines Lebensdauertests',
            description: "In der Thesis wurde im Rahmen der Entwicklung von Motorsteuergeräten eine low-level C API in eine C++ API mit IT-Security, Auto-Connection und erweiterten Funktionalitäten überführt, um eine interoperable Server-Client-API zu erstellen. Ein plattformunabhängiges Kommunikationsmodul für den Datentransfer zwischen Motorsteuergerät und PC sowie eine Überwachungssoftware für Ausdauertests wurden implementiert. Die API-Interoperabilität erfolgt über ein selbst entwickeltes, XML-basiertes Kommunikationsprotokoll, das das Auslesen, Bespielen und die Überwachung von CAN-Nachrichten ermöglicht."
        }
    }
];

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
                <picture className="content-section-spacer" id="skill-spider-chart">
                    <source media="(min-width: 768px)" srcSet={spiderChartBig}/>
                    <img src={spiderChartSmall} alt="Spider chart with skill areas"/>
                </picture>

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
                                        <h3 className="m-0">{section.title}</h3>
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

            <h2 className="content-section-spacer">Bildung</h2>
            <p>Zwischen 2011 und 2018 habe ich an der Frankfurt University of Applied Sciences zunächst den Bachelor in Ingenieurinformatik absolviert und anschließend berufsbegleitend den Master in High Integrity Systems. Diese Kombination aus Informatik und Ingenieurwissenschaften hat mir ein breites Fundament in Softwareentwicklung, Hardware-Design, IT-Sicherheit, formalen Methoden und datenintensiven Systemen vermittelt.</p>
            <EducationTimeline
                data={educationData}
                id="education-section"
                className="my-custom-class"
            />
        </div>
    );
}

export default Expertise;