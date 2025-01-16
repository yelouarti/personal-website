import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import linkedinIcon from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';
import stackoverflowIcon from './assets/stackoverflow.svg';
import mediumIcon from './assets/medium.svg';

const SocialIcons = ({ classNamePostfix = "default", className = ""  }) => {
            return (
            <div className={`d-flex social-icons social-icons--${classNamePostfix} ${className}`}>
                <a href="https://www.linkedin.com/in/younes-el-ouarti/" className="social-icon" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn"/>
                </a>
                <a href="https://github.com/yelouarti" className="social-icon" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub"/>
                </a>
                <a href="https://stackoverflow.com/users/3705861/younes-el-ouarti" className="social-icon" target="_blank" rel="noreferrer">
                    <img src={stackoverflowIcon} alt="Stack Overflow"/>
                </a>
                <a href="https://medium.com/@kamillionlabs" className="social-icon" target="_blank" rel="noreferrer">
                    <img src={mediumIcon} alt="Medium"/>
                </a>
            </div>
        );
    };

export default SocialIcons;
