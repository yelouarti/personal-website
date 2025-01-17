import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

import globeIcon from '../../assets/images/icons/globe.svg';
import arrowUpIcon from './assets/arrowup.svg';
import {LanguageContext} from "../header/LanguageContext";
import { useTranslation } from 'react-i18next';
import SocialIcons from "../social-icons";

const Footer = () => {

    const { t } = useTranslation();
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
            {/*back to top button*/}
            <div className="row justify-content-center">
                <div className="back-to-top-btn col-auto d-flex flex-column align-items-center justify-content-center my-5">
                    <button
                        onClick={scrollToTop}
                        className="mb-3 mt-5"
                    >
                        <img src={arrowUpIcon} alt={t('footer.arrowUpAlt')}/>
                    </button>
                    <span>{t('footer.backToTop')}</span>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="container-fluid main-container">
                    {/* Row for social icons */}
                    <div className="row justify-content-md-start justify-content-center">
                        <div className="col-auto">
                            <SocialIcons classNamePostfix="footer" />
                        </div>
                    </div>

                    {/* Row for Über Mich and Kontakt */}
                    <div className="d-flex flex-column flex-md-row justify-content-between gap-md-5">
                        <div className="col mb-3 footer-column">
                            <p className="footer-title">{t('footer.aboutMeTitle')}</p>
                            <p className="footer-text">
                                {t('footer.aboutMeText1')}
                            </p>
                        </div>
                        <div className="col mb-3 footer-column">
                            <p className="footer-title">{t('footer.contactTitle')}</p>
                            <p className="footer-text">
                                <strong>{t('footer.emailLabel')}:</strong> contact@elouarti.net<br/>
                                <strong>{t('footer.responseTimeLabel')}:</strong> {t('footer.responseTime')}
                            </p>
                            <p className="footer-text">
                                {t('footer.contactPhone')}
                            </p>
                        </div>
                    </div>

                    {/* Language switch */}
                    <div className="row">
                        <div className="d-flex footer-language-switch mt-5 mt-md-0 justify-content-center justify-content-md-start"
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
                                src={globeIcon}
                                alt={t('footer.globeAlt')}
                            />
                            <p>{t('footer.languageSwitchLabel')}</p>
                        </div>
                    </div>

                    {/* Row for copyright and links */}
                    <div className="row mt-2">
                        <div className="col d-flex justify-content-center justify-content-md-start">
                            <div className="footer-copyright d-flex flex-column-reverse flex-md-row">
                            <span className="mb-4">
                                {t('footer.copyright', {year: new Date().getFullYear()})}
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
