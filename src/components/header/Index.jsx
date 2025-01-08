import React, {useContext} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './assets/logo.svg';
import globe from '../../assets/images/icons/globe.svg';
import {LanguageContext} from "./LanguageContext";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    const {language: currentLanguage, switchLanguage} = useContext(LanguageContext);

    // Toggle function to switch between 'de' and 'en'
    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'de' ? 'en' : 'de';
        switchLanguage(newLanguage);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid main-container">
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
                        alt={t('header.logoAlt')}
                    />
                    <div className="offcanvas-body">
                        <ul className="navbar-nav nav-list ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#expertise">
                                    {t('header.expertise')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#leistungen">
                                    {t('header.services')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projekte">
                                    {t('header.projects')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <button className="contact-btn">
                                    {t('header.contact')}
                                </button>
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
