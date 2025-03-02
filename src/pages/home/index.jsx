import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import Hero from "../../components/hero/home";
import SkillsOverviewCard from "../../components/overview-card";
import tenYearsIcon from "./assets/ten-years.svg";
import bridgeIcon from "./assets/bridge.svg";
import hateofluxIcon from "./assets/hateoflux.svg";
import vennDiagrammIcon from "./assets/venn-diagramm-roles.svg";
import { Link } from "react-router-dom";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Hero />
            <div className="main-container home-container d-flex pt-4 justify-content-center flex-column">
                <h2>{t('home.introduction.title')}</h2>
                <p>
                    {t('home.introduction.description')}
                </p>

                <div id="home-quote" className="content-section-inter-spacer justify-content-center">
                    <div className="block-quote-bar" />
                    <i className="bi bi-quote d-flex"></i>
                    <p>{t('home.quote')}</p>
                </div>

                <div id="home-cards" className="container content-section-spacer px-md-4">
                    <div className="row g-4 row-cols-1 row-cols-md-2">
                        <div className="col d-flex justify-content-center justify-content-md-end">
                            <SkillsOverviewCard
                                id="ten-year-card"
                                title={t('home.skillCards.experience.title')}
                                icon={tenYearsIcon}
                                tagLine={t('home.skillCards.experience.tagLine')}
                            />
                        </div>
                        <div className="col d-flex justify-content-center justify-content-md-start">
                            <SkillsOverviewCard
                                id="communicator-card"
                                title={t('home.skillCards.communicator.title')}
                                icon={bridgeIcon}
                                tagLine={t('home.skillCards.communicator.tagLine')}
                            />
                        </div>
                        <div className="col d-flex justify-content-center justify-content-md-end">
                            <SkillsOverviewCard
                                id="role-card"
                                title={t('home.skillCards.hybridRoles.title')}
                                icon={vennDiagrammIcon}
                                tagLine={t('home.skillCards.hybridRoles.tagLine')}
                            />
                        </div>
                        <div className="col d-flex justify-content-center justify-content-md-start">
                            <SkillsOverviewCard
                                id="open-source-card"
                                title={t('home.skillCards.openSource.title')}
                                icon={hateofluxIcon}
                                tagLine={t('home.skillCards.openSource.tagLine')}
                            />
                        </div>
                    </div>
                </div>

                <div className="content-section-spacer">
                    <h2>{t('home.callToAction.title')}</h2>
                    <p className="p-0 m-0">{t('home.callToAction.description')}</p>
                    <div className="d-flex py-4 gap-3">
                        <Link to="/contact">
                            <button className="std-btn">{t('home.callToAction.contactButton')}</button>
                        </Link>
                        <Link className="d-flex flex-row justify-content-center text-decoration-none" to="/expertise">
                            <button className="muted-btn">{t('home.callToAction.expertiseButton')}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;