// // src/Game.js
// import React, { useState } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';
// import QuestionDisplay from './QuestionDisplay';
// import PlayerInput from './PlayerInput';
// import MessageDisplay from './MessageDisplay';

// const questions = [
//   {
//     question: 'What is the capital of France?',
//     options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
//     answer: 'Paris',
//   },
//   {
//     question: 'Which planet is known as the Red Planet?',
//     options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
//     answer: 'Mars',
//   },
//   {
//     question: 'Who wrote "Hamlet"?',
//     options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Leo Tolstoy'],
//     answer: 'William Shakespeare',
//   },
//   {
//     question: 'What is the largest mammal in the world?',
//     options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
//     answer: 'Blue Whale',
//   },
//   {
//     question: 'Which element has the chemical symbol "O"?',
//     options: ['Gold', 'Oxygen', 'Silver', 'Hydrogen'],
//     answer: 'Oxygen',
//   },
// ];

// const Game = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [message, setMessage] = useState('');
//   const [playerName, setPlayerName] = useState('');
//   const [isAnswered, setIsAnswered] = useState(false);

//   const handlePlayerSubmit = (name, answer) => {
//     const currentQuestion = questions[currentQuestionIndex];

//     if (answer === currentQuestion.answer) {
//       setMessage(`Congratulations, ${name}!`);
//     } else {
//       setMessage(`Sorry, ${name}. Your answer is wrong.`);
//     }

//     setIsAnswered(true);

//     // Proceed to the next question after a short delay
//     setTimeout(() => {
//       setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
//       setMessage('');
//       setIsAnswered(false);
//     }, 3000);
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>KBC Game</h1>
//       <QuestionDisplay question={questions[currentQuestionIndex]} />
//       <QRCodeCanvas value={`http://localhost:3000?question=${currentQuestionIndex}`} />
//       <PlayerInput onPlayerSubmit={handlePlayerSubmit} isAnswered={isAnswered} />
//       {message && <MessageDisplay message={message} />}
//     </div>
//   );
// };

// export default Game;


// src/Game.js
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import QuestionDisplay from './QuestionDisplay';
import MessageDisplay from './MessageDisplay';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Leo Tolstoy'],
    answer: 'William Shakespeare',
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    answer: 'Blue Whale',
  },
  {
    question: 'Which element has the chemical symbol "O"?',
    options: ['Gold', 'Oxygen', 'Silver', 'Hydrogen'],
    answer: 'Oxygen',
  },
];

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>KBC Game</h1>
      <QuestionDisplay question={questions[currentQuestionIndex]} />
      <QRCodeCanvas 
        value={`http://localhost:3000/player/${currentQuestionIndex}`} 
      />
      <button onClick={handleNextQuestion}>Next Question</button>
      {message && <MessageDisplay message={message} />}
    </div>
  );
};

export default Game;
