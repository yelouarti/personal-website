import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import OfferCard from "../../components/offer-card";

const offerCardData = [
    {
        "title": "Backend",
        "iconName": "code-slash",
        "valueProposition": [
            "Entwicklung skalierbarer APIs und event-driven Services",
            "Migration von Legacy-Systemen zu Cloud-nativen Lösungen",
            "Konzeption resilienter Datenverarbeitungs-Pipelines"
        ]
    },
    {
        "title": "Architektur",
        "iconName": "buildings",
        "valueProposition": [
            "Effektive Führung von Entwicklungsteams",
            "Erstellung von PoCs und Begleitung der technischen Umsetzung",
            "Entwicklung constraint-getriebener Systemlösungen"
        ]
    },
    {
        "title": "Test",
        "iconName": "clipboard-data",
        "valueProposition": [
            "Entwicklung automatisierter Teststrategien",
            "Aufbau komplexer Integrationsumgebungen",
            "Implementierung automatisierter Performance-Validierung"
        ]
    }
];

const Services = () => {
    return (
        <div className="main-container">
            <h2>Leistungsspektrum</h2>
            <p>Mit über 10 Jahren Erfahrung in Java-Backend-Entwicklung und Solution Architecture bin ich spezialisiert
                auf die Konzeption resilienter, High-Performance-Systeme für Projekte im Enterprise-Bereich. Ich
                verbinde fundierte technische Handwerkskunst mit einer nachgewiesenen Erfolgsbilanz in der Entwicklung
                eleganter, constraint-orientierter Lösungen. Gemeinsam transformieren wir Ihre Vision in eine robuste,
                skalierbare Realität.</p>

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
        </div>
    );
};

export default Services;