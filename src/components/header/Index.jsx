import React, {useContext} from 'react';
import './style.css';
import logo from './assets/logo.svg';
import globe from './assets/globe.svg';
import {LanguageContext} from "./LanguageContext";


const Header = () => {
    const { language: currentLanguage, switchLanguage } = useContext(LanguageContext);

    // Toggle function to switch between 'de' and 'en'
    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'de' ? 'en' : 'de';
        switchLanguage(newLanguage);
    };

    return (
        <header className="site-header">
            {/* Left side: Logo (placeholder) + Name/Title */}
            <img
                className="logo"
                src={logo}
                alt="Younes El Ouarti - Fullstack Developer • IT-Solution Architect"
            />
            {/* Right side: Navigation + Language Switch */}
            <nav className="header-nav">
                <ul className="nav-list">
                    <li>Expertise</li>
                    <li>Leistungen</li>
                    <li>Projekte</li>
                    <li>
                        <button className="contact-btn">Kontakt</button>
                    </li>
                </ul>
                <div className="vertical-bar"></div>
                <div
                    className="language-switch"
                    onClick={toggleLanguage}
                    style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}
                    role="button"
                    aria-label={`Switch language to ${currentLanguage === 'de' ? 'English' : 'German'}`}
                    tabIndex={0} // Make it focusable
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            toggleLanguage();
                        }
                    }}
                >
                <img
                    className="globe-icon"
                    src={globe}
                    alt="Language switch"
                    style={{marginRight: '8px'}}
                />
                <span>
                    <span className={currentLanguage === 'de' ? 'active-language' : 'inactive-language'}>DE</span> |{' '}
                    <span className={currentLanguage === 'en' ? 'active-language' : 'inactive-language'}>EN</span>
                </span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
