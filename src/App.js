// // // // App.js
// // // import React, { useState } from 'react';
// // // // import QRCode from 'qrcode.react';
// // // import QuestionDisplay from './QuestionDisplay';
// // // import PlayerInput from './PlayerInput';
// // // import MessageDisplay from './MessageDisplay';
// // // import { QRCodeCanvas } from 'qrcode.react';


// // // const questions = [
// // //   {
// // //     question: 'What is the capital of France?',
// // //     options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
// // //     answer: 'Paris',
// // //   },
// // //   {
// // //     question: 'Which planet is known as the Red Planet?',
// // //     options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
// // //     answer: 'Mars',
// // //   },
// // //   {
// // //     question: 'Who wrote "Hamlet"?',
// // //     options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Leo Tolstoy'],
// // //     answer: 'William Shakespeare',
// // //   },
// // //   {
// // //     question: 'What is the largest mammal in the world?',
// // //     options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
// // //     answer: 'Blue Whale',
// // //   },
// // //   {
// // //     question: 'Which element has the chemical symbol "O"?',
// // //     options: ['Gold', 'Oxygen', 'Silver', 'Hydrogen'],
// // //     answer: 'Oxygen',
// // //   },
// // // ];

// // // const App = () => {
// // //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// // // //  const [players, setPlayers] = useState([]);
// // //   const [message, setMessage] = useState('');

// // //   const handlePlayerSubmit = (name, answer) => {
// // //     const currentQuestion = questions[currentQuestionIndex];
// // //     if (answer === currentQuestion.answer) {
// // //       setMessage(`Congratulations, ${name}!`);
// // //     } else {
// // //       setMessage(`Sorry, ${name}. Your answer is wrong.`);
// // //     }

// // //     // Proceed to the next question after a short delay
// // //     setTimeout(() => {
// // //       setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
// // //       setMessage('');
// // //     }, 3000);
// // //   };

// // //   return (
// // //     <div style={{ textAlign: 'center' }}>
// // //       <h1>KBC Game</h1>
// // //       <QuestionDisplay question={questions[currentQuestionIndex]} />
// // //       {/* <QRCode value={`http://localhost:3000?question=${currentQuestionIndex}`} /> */}
// // //         <QRCodeCanvas value={`http://yourdomain.com?question=${currentQuestionIndex}`} />

// // //       <PlayerInput onPlayerSubmit={handlePlayerSubmit} />
// // //       {message && <MessageDisplay message={message} />}
// // //     </div>
// // //   );
// // // };

// // // export default App;



// // // src/App.js
// // import React from 'react';
// // import Game from './Game';

// // const App = () => {
// //   return (
// //     <div>
// //       <Game />
// //     </div>
// //   );
// // };

// // export default App;


// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Game from './Game';
// import PlayerScreen from './PlayerScreen';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Game />} />
//         <Route path="/player/:questionIndex" element={<PlayerScreen />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminScreen from './AdminScreen';
import JoinScreen from './JoinScreen';
import PlayerScreen from './PlayerScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminScreen />} />
        <Route path="/join" element={<JoinScreen />} />
        <Route path="/player" element={<PlayerScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
