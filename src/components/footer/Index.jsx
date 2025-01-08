import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';
import stackoverflowIcon from '../../assets/images/icons/stackoverflow.svg';
import mediumIcon from '../../assets/images/icons/medium.svg';
import globeIcon from '../../assets/images/icons/globe.svg';
import arrowUpIcon from './assets/arrowup.svg';
import {LanguageContext} from "../header/LanguageContext";

const Footer = () => {

    const {language: currentLanguage, switchLanguage} = useContext(LanguageContext);

    // Toggle function to switch between 'de' and 'en'
    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'de' ? 'en' : 'de';
        switchLanguage(newLanguage);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="mt-auto">
            {/* Row for social icons */}
            <div className="row justify-content-center">
                <div className="back-to-top-btn col-auto d-flex flex-column align-items-center justify-content-center my-5">
                    <button
                        onClick={scrollToTop}
                        className="my-3"
                    >
                        <img src={arrowUpIcon} alt="Back to top"/>
                    </button>
                    <span>Nach oben</span>
                </div>
            </div>
            <div className="footer-wrapper">
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
                <div className="d-flex flex-column flex-md-row justify-content-between gap-md-5">
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
                <div className="row">
                    <div className="d-flex footer-language-switch mt-5 mt-md-0 justify-content-center justify-content-md-start"
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
                    <div className="col d-flex justify-content-center justify-content-md-start">
                        <div className="footer-copyright d-flex flex-column-reverse flex-md-row">
                            <span className="mb-4">
                                © {new Date().getFullYear()} Younes El Ouarti – Alle Rechte Vorbehalten
                            </span>
                            <span id="copyright-datenschutz-separator" className={ currentLanguage === "de" ?
                                "d-none d-md-flex px-2" : "d-none"}>
                                |
                            </span>
                            <div className= {currentLanguage === "de"? "mb-4 footer-link text-center text-md-start" : "d-none" }>
                                <a href="/datenschutz">Datenschutz</a>
                                <span className="px-2">|</span>
                                <a href="/impressum">Impressum</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
