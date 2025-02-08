import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import emptyCircle from './assets/empty.svg';
import fullCircle from './assets/full.svg';


const CircleRating = ({ value = 0 }) => {
    return (
        <div className="d-flex flex-row align-items-center justify-content-right gap-1">
            {[...Array(5)].map((_, index) => (
                <div key={index}>
                    {index < value ? <img src={fullCircle} alt={"full circle"}/> : <img src={emptyCircle} alt={"empty circle"}/>}
                </div>
            ))}
        </div>
    );
};

export default CircleRating;