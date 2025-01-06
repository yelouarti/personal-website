import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';
import stackoverflowIcon from '../../assets/images/icons/stackoverflow.svg';
import mediumIcon from '../../assets/images/icons/medium.svg';
import globeIcon from '../../assets/images/icons/globe.svg';
import {LanguageContext} from "../header/LanguageContext";

const Footer = () => {

    const {language: currentLanguage, switchLanguage} = useContext(LanguageContext);

    // Toggle function to switch between 'de' and 'en'
    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'de' ? 'en' : 'de';
        switchLanguage(newLanguage);
    };

    return (
        <footer className="mt-auto footer-wrapper">
            <div className="container-fluid main-container">
                {/* Row for social icons */}
                <div className="row justify-content-md-start justify-content-center">
                    <div className="col-auto">
                        <div className="social-icons d-flex">
                            <a href="https://www.linkedin.com/in/younes-el-ouarti/" target="_blank" rel="noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn"/>
                            </a>
                            <a href="https://github.com/yelouarti" target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="GitHub"/>
                            </a>
                            <a href="https://stackoverflow.com/users/3705861/younes-el-ouarti" target="_blank" rel="noreferrer">
                                <img src={stackoverflowIcon} alt="Stack Overflow"/>
                            </a>
                            <a href="https://medium.com/@kamillionlabs" target="_blank" rel="noreferrer">
                                <img src={mediumIcon} alt="Medium"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Row for Über Mich and Kontakt */}
                <div className="row justify-content-between">
                    <div className="col mb-3 footer-column">
                        <p className="footer-title">Über Mich</p>
                        <p className="footer-text">
                            Ich bin ein Full Stack Developer und IT-Solution Architect mit über 10 Jahren Erfahrung in Java-Backend-Entwicklung und Microservice-Architekturen. Mein Fokus: skalierbare Cloud-Lösungen, sauberer Code und nachhaltiges Engineering. Mit meiner Architekturerfahrung und kommunikativen Stärke bringe ich komplexe Anforderungen effizient auf den Punkt – von der Konzeption bis zur Umsetzung.
                        </p>
                    </div>
                    <div className="col mb-3 footer-column">
                        <p className="footer-title">Kontakt</p>
                        <p className="footer-text">
                            <strong>E-Mail:</strong> contact@elouarti.net<br/>
                            <strong>Bearbeitungsdauer:</strong> E-Mails werden innerhalb
                            von 1-2 Werktagen beantwortet.
                        </p>
                        <p className="footer-text">
                            Für telefonische Kontaktaufnahme bitte ich um
                            vorherige Absprache per E-Mail.
                        </p>
                    </div>
                </div>

                {/* Language switch */}
                <div className="row mt-2">
                    <div className="d-flex footer-language-switch"
                         onClick={toggleLanguage}
                         role="button"
                         aria-label={`Switch language to ${
                             currentLanguage === 'de' ? 'English' : 'German'
                         }`}
                         tabIndex={0}
                         onKeyUp={(e) => {
                             if (e.key === 'Enter' || e.key === ' ') {
                                 toggleLanguage();
                             }
                         }}
                    >
                        <img
                            src={globeIcon}
                            alt="Language switch"
                        />
                        <p>Deutsch (Deutschland)</p>
                    </div>
                </div>

                {/* Row for copyright and links */}
                <div className="row mt-2">
                    <div className="col text-left">
                        <p className="footer-copyright">
                            © 2025 Younes El Ouarti – Alle Rechte Vorbehalten &nbsp;|&nbsp;&nbsp;
                            <a href="/datenschutz" className="footer-link">Datenschutz</a> &nbsp;|&nbsp;
                            <a href="/impressum" className="footer-link">Impressum</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
