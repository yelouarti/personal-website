import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import SkillGraph from "../skill-graph";
import {useTranslation} from "react-i18next";

const SkillArea = ({id, summary="",  keyAchievements = [], technicalSkills= [], className}) => {
    const { t } = useTranslation();

    return (
        <div id={id} className={`p-4 skills-area-default d-flex flex-column ${className}`}>
            <h4 className="mt-0">{t("skillArea.summary")}</h4>
            <p>{summary}</p>
            <h4>{t("skillArea.skills")}</h4>
            <SkillGraph
                id={`${id}-graph`}
                technicalSkills={technicalSkills}
                className={`${id}-graph`}
                />
            <h4>{t("skillArea.achievements")}</h4>
            <ul>
                {keyAchievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillArea;