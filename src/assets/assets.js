const questions = [
    {
        questionText: 'How do you create a function in JavaScript?',
        answerOptions: [
            { answerText: 'function = myFunction()', isCorrect: false },
            { answerText: 'function:myFunction()', isCorrect: false },
            { answerText: 'function myFunction()', isCorrect: true },
            { answerText: 'create myFunction()', isCorrect: false },
        ],
    },
    {
        questionText:
            'What is the output of this code? console.log(typeof null);',
        answerOptions: [
            { answerText: 'null', isCorrect: false },
            { answerText: 'object', isCorrect: true },
            { answerText: 'undefined', isCorrect: false },
            { answerText: 'number', isCorrect: false },
        ],
    },
    {
        questionText:
            'What will this code return? console.log(0.1 + 0.2 === 0.3);',
        answerOptions: [
            { answerText: 'true', isCorrect: false },
            { answerText: 'false', isCorrect: true },
            { answerText: 'TypeError', isCorrect: false },
            { answerText: 'NaN', isCorrect: false },
        ],
    },
    {
        questionText:
            'Which function of an Array object calls a function for each element in the array?',
        answerOptions: [
            { answerText: 'forEach()', isCorrect: true },
            { answerText: 'every()', isCorrect: false },
            { answerText: 'forEvery()', isCorrect: false },
            { answerText: 'each()', isCorrect: false },
        ],
    },
];
export default questions;
