import React, {useState} from 'react';
import {Game, Result} from "./components";
import {questions} from "./assets/questions";

const App = () => {

    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    
    const question = questions[step];

    const onClickVariant = (ansVariant) => {
        console.log(step, ansVariant);
        setStep(step + 1);

        if (ansVariant === question.correct){
            setCorrect(correct + 1)
        }
    }

    
    return (
        <div className={'App'}>
            {step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/> : <Result correct={correct}/>}
        </div>
    );
};

export {App};

