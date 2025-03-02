import React from 'react';
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
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Hero/>
            <div className="main-container home-container d-flex pt-4 justify-content-center flex-column">
                <h2>Darf ich mich vorstellen</h2>
                <p>
                    als freiberuflicher Full Stack Developer und IT-Solution Architect bringe ich über 10 Jahre Expertise in der
                    Entwicklung ganzheitlicher Softwarelösungen und Microservice-Architekturen mit. Mein Fokus liegt auf
                    skalierbaren Cloud-Lösungen, wobei Clean Code und nachhaltiges Engineering für mich keine
                    Schlagworte, sondern gelebte Praxis sind. Mit meiner Architekturerfahrung und kommunikativen Stärke
                    bringe ich komplexe Anforderungen effizient auf den Punkt – von der Konzeption bis zur Umsetzung.
                </p>

                <div id="home-quote" className="content-section-inter-spacer justify-content-center">
                    <div className="block-quote-bar"/>
                    <i className="bi bi-quote d-flex"></i>
                    <p>In der Begrenzung zeigt sich nicht die Einschränkung, sondern die Quelle echter Innovation.</p>
                </div>

                <div id="home-cards" className="container content-section-spacer px-md-4">
                    <div className="row g-4 row-cols-1 row-cols-md-2">
                        <div className="col d-flex  justify-content-center justify-content-md-end">
                            <SkillsOverviewCard
                                id="ten-year-card"
                                title="Erfahrung aus der Praxis"
                                icon={tenYearsIcon}
                                tagLine="10+ Jahre, 35+ Microservices, unzählige REST-Schnittstellen"
                            />
                        </div>
                        <div className="col d-flex justify-content-center justify-content-md-start">
                            <SkillsOverviewCard
                                id="communicator-card"
                                title="Kommunikator"
                                icon={bridgeIcon}
                                tagLine="Übersetzt komplexe Technologie in verständliche Lösungen"
                            />
                        </div>
                        <div className="col d-flex justify-content-center justify-content-md-end">
                            <SkillsOverviewCard
                                id="role-card"
                                title="Hybride Rollen"
                                icon={vennDiagrammIcon}
                                tagLine="Wechselt nahtlos zwischen Architektur-Design und Codezeilen"
                            />
                        </div>
                        <div className="col d-flex justify-content-center  justify-content-md-start">
                            <SkillsOverviewCard
                                id="open-source-card"
                                title="Open Source"
                                icon={hateofluxIcon}
                                tagLine="hateoflux – mein Beitrag zur reaktiven Spring-Welt"
                            />
                        </div>
                    </div>
                </div>


                <div className="content-section-spacer">
                    <h2>Neugierig geworden?</h2>
                    <p className="p-0 m-0">Ob Beratung, neue Projekte oder einfach nur ein Kennenlernen – kontaktieren Sie mich, und wir finden gemeinsam heraus, wie ich Ihnen weiterhelfen kann.</p>
                    <div className="d-flex py-4 gap-3">
                        <Link to="/contact">
                             <button className="std-btn">Kontakt aufnehmen</button>
                        </Link>
                        <Link className="d-flex flex-row justify-content-center text-decoration-none" to="/expertise">
                            <button className="muted-btn">Weiter zur Expertise</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
