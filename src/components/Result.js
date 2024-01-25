import React from 'react';
import {questions} from "../assets/questions";

const Result = ({correct}) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt={'result'}/>
            <h2>Ви вгадали {correct} відповіді з {questions.length}</h2>
            <a href="/">
                <button>Спробувати знову</button>
            </a>
        </div>
    );
};

export {Result};