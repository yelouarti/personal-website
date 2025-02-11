import React from 'react';
import './style.css';
import image4k from './assets/hero-bg-4k.webp';
import image2k from './assets/hero-bg-2k.webp';
import imageFhd from './assets/hero-bg-fhd.webp';
import imageTablet from './assets/hero-bg-tablet.webp';
import imageMobile from './assets/hero-bg-mobile.jpg';
import profileImage from './assets/profile.webp';
import SocialIcons from "../../social-icons";
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const {t} = useTranslation();

    return (<div className="hero-container">
            <picture className="col" id="hero-background">
                <source media="(min-width: 3840px)" srcSet={image4k}/>
                <source media="(min-width: 1921px)" srcSet={image2k}/>
                <source media="(min-width: 1301px)" srcSet={imageFhd}/>
                {/*TODO need one for 996-1301*/}
                <source media="(min-width: 811px)" srcSet={imageTablet}/>
                <img src={imageMobile} alt="Hero"/>
            </picture>

            <div className="hero-content main-container">
                <div className="row d-flex">
                    {/*profile image*/}
                    <div className="col-auto">
                        <img id="profile-image" src={profileImage} alt="That's me!" className="profile-image"/>
                    </div>

                    {/*info*/}
                    <div className="col d-flex flex-column">
                        <h1 id="hc-name">Younes El Ouarti</h1>
                        <p id="hc-role">Full Stack Developer · IT-Solution Architect</p>
                        <p id="hc-location">{t('hero.location')}</p>
                        <SocialIcons classNamePostfix="hero flex-row"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
