import React, {useContext} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './assets/logo.svg';
import globe from '../../assets/images/icons/globe.svg';
import {LanguageContext} from "./LanguageContext";

const Header = () => {
    const {language: currentLanguage, switchLanguage} = useContext(LanguageContext);

    // Toggle function to switch between 'de' and 'en'
    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'de' ? 'en' : 'de';
        switchLanguage(newLanguage);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        className="logo"
                        src={logo}
                        alt="Younes El Ouarti - Fullstack Developer • IT-Solution Architect"
                    />
                </a>

                {/* Hamburger Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"/>
                </button>

                {/* Offcanvas Nav Links + Language Switch */}
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="mainNavbar"
                    aria-labelledby="mainNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <img
                        id="logo-side-menu"
                        className="logo"
                        src={logo}
                        alt="Younes El Ouarti - Fullstack Developer • IT-Solution Architect"
                    />
                    <div className="offcanvas-body">
                        <ul className="navbar-nav nav-list ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#expertise">Expertise</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#leistungen">Leistungen</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projekte">Projekte</a>
                            </li>
                            <li className="nav-item">
                                <button className="contact-btn">Kontakt</button>
                            </li>
                        </ul>

                        <div className="separator-bar"/>

                        {/* Language Switch */}
                        <div
                            className="language-switch d-flex align-items-center"
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
                                className="globe-icon me-2"
                                src={globe}
                                alt="Language switch"
                            />
                            <div
                                className={
                                    currentLanguage === 'de' ? 'active-language' : 'inactive-language'
                                }
                            >
                                 <span className="full-language-name">
                                     Deutsch
                                 </span>
                                <span className="abbreviated-language-name">
                                     DE
                                 </span>
                            </div>
                            {' '} · {' '}
                            <div
                                className={
                                    currentLanguage === 'en' ? 'active-language' : 'inactive-language'
                                }
                            >
                                <span className="full-language-name">
                                English
                                </span>
                                <span className="abbreviated-language-name">
                                EN
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
