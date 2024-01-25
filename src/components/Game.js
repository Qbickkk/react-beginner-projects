import React from 'react';
import {questions} from "../assets/questions";

const Game = ({question, onClickVariant, step}) => {
    const {title,variants,correct} = question;

    const percent = Math.round((step / questions.length) * 100);


    return (
        <>
            <div className={'progress'}>
                <div style={{ width: `${percent}%` }} className={"progress__inner"}></div>
            </div>
            <h1>{title}</h1>
            <ul>
                {variants.map((variant, index)=> <li onClick={()=>onClickVariant(index)} key={variant}>{variant}</li>)}
            </ul>
        </>
    );
};

export {Game};