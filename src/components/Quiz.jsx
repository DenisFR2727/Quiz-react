import { useState } from 'react';
import questions from '../assets/assets';

import './Quiz.css';

function Quiz() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const nextQuestionHandle = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setIsCorrect(null);
        } else {
            setShowScore(true);
        }
    };

    const isCorrectAnsver = (index) => {
        setIsCorrect(index);
        // Поточний індекс відповіді
        const option = questions[currentQuestion].answerOptions[index];
        if (option.isCorrect === true) {
            setScore(score + 1);
        }
    };
    return (
        <>
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <div className="question-section">
                    <div className="question-count">
                        <span>Question {1 + currentQuestion}</span>
                        <span>/{questions.length}</span>
                    </div>
                    <div className="question-text">
                        {questions[currentQuestion].questionText}
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map(
                            (option, index) => (
                                <ul key={index}>
                                    <li
                                        onClick={() => isCorrectAnsver(index)}
                                        className={
                                            isCorrect === index
                                                ? option.isCorrect
                                                    ? 'correct'
                                                    : 'wrong'
                                                : ''
                                        }
                                    >
                                        {option.answerText}
                                    </li>
                                </ul>
                            )
                        )}
                        <button onClick={nextQuestionHandle}>Next</button>
                    </div>
                </div>
            )}
        </>
    );
}
export default Quiz;
