import React, {useContext, useState, useEffect} from 'react';
import './style.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './assets/logo.svg';
import globe from '../../assets/images/icons/globe.svg';
import {LanguageContext} from "./LanguageContext";
import {useScrollDirection} from "./useScrollDirection"
import { useTranslation } from 'react-i18next';
import {Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const [isAtTop, setIsAtTop] = useState(true);
    const { t } = useTranslation();
    const {language: currentLanguage, switchLanguage} = useContext(LanguageContext);
    const isVisible = useScrollDirection();

    // Toggle function to switch between 'de' and 'en'
    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'de' ? 'en' : 'de';
        switchLanguage(newLanguage);
    };

    // Function to close the offcanvas menu
    const closeOffcanvas = () => {
        const offcanvasElement = document.getElementById('mainNavbar');
        if (offcanvasElement) {
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvasInstance) {
                offcanvasInstance.hide();

                // Also remove the backdrop manually
                const backdrop = document.querySelector('.offcanvas-backdrop');
                if (backdrop) {
                    backdrop.classList.remove('show');
                    setTimeout(() => {
                        backdrop.remove();
                    }, 300); // Wait for fade-out transition
                }
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top ${isVisible ? 'nav-visible' : 'nav-hidden'} ${!isAtTop ? 'nav-scrolled' : ''}`}>
            <div className="container-fluid main-container">
                <a className="navbar-brand" href="/">
                    <img
                        className="logo"
                        src={logo}
                        alt="Younes El Ouarti - Full Stack Developer • IT-Solution Architect"
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
                    <div className="offcanvas-body">
                        <ul className="navbar-nav nav-list ms-auto">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/expertise' ? 'nav-link-active' : ''}`}
                                    to="/expertise"
                                    onClick={closeOffcanvas}
                                >
                                    {t('header.expertise')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/services' ? 'nav-link-active' : ''}`}
                                    to="/services"
                                    onClick={closeOffcanvas}
                                >
                                    {t('header.services')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/*<Link*/}
                                {/*    className={`nav-link ${location.pathname === '/projects' ? 'nav-link-active' : ''}`}*/}
                                {/*    to="/projects"*/}
                                {/*>*/}
                                {/*    {t('header.projects')}*/}
                                {/*</Link>*/}
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    onClick={closeOffcanvas}
                                >
                                    <button className={location.pathname === '/contact' ? 'nav-link-active' : 'contact-btn'}>
                                        {t('header.contact')}
                                    </button>
                                </Link>
                            </li>
                        </ul>

                        <div className="separator-bar"/>

                        {/* Language Switch */}
                        <div
                            className="header-language-switch d-flex align-items-center"
                            onClick={toggleLanguage}
                            role="button"
                            aria-label={t('header.switchLanguageTo', {
                                language: currentLanguage === 'de' ? t('header.English') : t('header.Deutsch')
                            })}
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
                                alt={t('header.languageSwitchAlt')}
                            />
                            <div
                                className={
                                    currentLanguage === 'de' ? 'active-language' : 'inactive-language'
                                }
                            >
                                <span className="full-language-name">
                                    {t('header.Deutsch')}
                                </span>
                                <span className="abbreviated-language-name">
                                    {t('header.DE')}
                                </span>
                            </div>
                            {' '} · {' '}
                            <div
                                className={
                                    currentLanguage === 'en' ? 'active-language' : 'inactive-language'
                                }
                            >
                                <span className="full-language-name">
                                    {t('header.English')}
                                </span>
                                <span className="abbreviated-language-name">
                                    {t('header.EN')}
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