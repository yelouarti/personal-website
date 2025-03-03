import React from 'react';
import './style.css';
import image4k from './assets/hero-bg-4k.webp';
import image2k from './assets/hero-bg-2k.webp';
import imageFhd from './assets/hero-bg-fhd.webp';
import imageHd from './assets/hero-bg-hd.webp';
import imageTablet from './assets/hero-bg-tablet.webp';
import imageMobile from './assets/hero-bg-mobile.jpg';
import profileImage from './assets/profile.webp';
import SocialIcons from "../../social-icons";
import { useTranslation } from 'react-i18next';

const HomeHero = () => {
    const {t} = useTranslation();

    return (<div className="home-hero-container">
            <picture className="col" id="home-hero-background">
                <source media="(min-width: 3840px)" srcSet={image4k}/>
                <source media="(min-width: 1921px)" srcSet={image2k}/>
                <source media="(min-width: 1301px)" srcSet={imageFhd}/>
                <source media="(min-width: 996px)" srcSet={imageHd}/>
                <source media="(min-width: 811px)" srcSet={imageTablet}/>
                <img src={imageMobile} alt="Clean Desk"/>
            </picture>

            <div className="home-hero-content main-container">
                <div className="row d-flex">
                    {/*profile image*/}
                    <div className="col-auto">
                        <img id="profile-image" src={profileImage} alt="That's me!" className="profile-image"/>
                    </div>

                    {/*info*/}
                    <div className="col d-flex flex-column">
                        <h1 id="hhc-name">Younes El Ouarti</h1>
                        <p id="hhc-role">Full Stack Developer · IT-Solution Architect</p>
                        <p id="hhc-location">{t('hero.location')}</p>
                        <SocialIcons classNamePostfix="hero flex-row"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
