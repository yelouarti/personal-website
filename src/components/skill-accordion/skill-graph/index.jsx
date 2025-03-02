import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import { ResponsiveBar } from '@nivo/bar'
import {useTranslation} from "react-i18next";
import CircleRating from "../../circle-rating";



const SkillGraph = ({id, title="", technicalSkills= [], className}) => {
    const { t } = useTranslation();
    const levels = t('skillGraph.levels', { returnObjects: true });

    return (
        <div id={id} className={`id d-flex flex-column justify-content-center align-items-center ${className}`}>
            <p><b>{title}</b></p>
            <div className="skill-graph-rating flex-column">
                {technicalSkills.map((skill, i) => (
                    <div className="d-flex pb-2 justify-content-between align-items-center" key={i}>
                        <p className="m-0">{skill.name}</p><CircleRating value={skill.level}/>
                    </div>
                ))}
            </div>

            <div className="skill-graph-bar-chart col-12 col-lg-10">
                <div style={{height: `${140 + (technicalSkills.length * 30)}px`}}>
                    <ResponsiveBar
                        data={technicalSkills.toReversed()}
                        keys={['level']}
                        indexBy="name"
                        margin={{
                            top: 0,
                            right: 50,
                            bottom: 100,
                            left: 210
                        }}
                        layout="horizontal"
                        valueScale={{
                            type: 'linear',
                            min: 0,
                            max: 5,
                            fixedStepSize: 1
                        }}
                        indexScale={{type: 'band', round: true}}
                        colors="#1E3A8A"
                        borderRadius={3}
                        padding={0.6}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 15,
                            tickRotation: -25,
                            tickValues: [0, 1, 2, 3, 4, 5],
                            format: (value) => levels[value],
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                        }}
                        gridXValues={[0, 1, 2, 3, 4, 5]}
                        theme={{
                            axis: {
                                ticks: {
                                    text: {
                                        fontSize: 16
                                    }
                                }
                            }
                        }}
                        enableLabel={false}
                        enableGridX={true}
                        enableGridY={false}
                        role="application"
                        ariaLabel="Skill levels chart"
                    />
                </div>
            </div>
        </div>
    );
}

export default SkillGraph;