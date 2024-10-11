// // // // src/PlayerScreen.js
// // // import React, { useState } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';

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

// // // const PlayerScreen = () => {
// // //   const { questionIndex } = useParams();
// // //   const question = questions[parseInt(questionIndex)];
// // //   const [name, setName] = useState('');
// // //   const [answer, setAnswer] = useState('');
// // //   const [message, setMessage] = useState('');
// // //   const navigate = useNavigate();

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     if (answer === question.answer) {
// // //       setMessage(`Congratulations, ${name}!`);
// // //     } else {
// // //       setMessage(`Sorry, ${name}. Your answer is wrong.`);
// // //     }

// // //     // Reset the input fields after submission
// // //     setName('');
// // //     setAnswer('');

// // //     // Navigate back to the main screen after a delay
// // //     setTimeout(() => {
// // //       navigate('/');
// // //     }, 3000);
// // //   };

// // //   return (
// // //     <div style={{ textAlign: 'center' }}>
// // //       <h1>Player Screen</h1>
// // //       <h2>{question.question}</h2>
// // //       <ul>
// // //         {question.options.map((option, index) => (
// // //           <li key={index}>{option}</li>
// // //         ))}
// // //       </ul>
// // //       <form onSubmit={handleSubmit}>
// // //         <input
// // //           type="text"
// // //           placeholder="Enter your name"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //           required
// // //         />
// // //         <input
// // //           type="text"
// // //           placeholder="Your answer"
// // //           value={answer}
// // //           onChange={(e) => setAnswer(e.target.value)}
// // //           required
// // //         />
// // //         <button type="submit">Submit</button>
// // //       </form>
// // //       {message && <h3>{message}</h3>}
// // //     </div>
// // //   );
// // // };

// // // export default PlayerScreen;



// // // src/PlayerScreen.js
// // import React, { useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';

// // const questions = [
// //   {
// //     question: 'What is the capital of France?',
// //     options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
// //     answer: 'Paris',
// //   },
// //   {
// //     question: 'Which planet is known as the Red Planet?',
// //     options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
// //     answer: 'Mars',
// //   },
// //   {
// //     question: 'Who wrote "Hamlet"?',
// //     options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Leo Tolstoy'],
// //     answer: 'William Shakespeare',
// //   },
// //   {
// //     question: 'What is the largest mammal in the world?',
// //     options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
// //     answer: 'Blue Whale',
// //   },
// //   {
// //     question: 'Which element has the chemical symbol "O"?',
// //     options: ['Gold', 'Oxygen', 'Silver', 'Hydrogen'],
// //     answer: 'Oxygen',
// //   },
// // ];

// // const PlayerScreen = () => {
// //   const { questionIndex } = useParams();
// //   const question = questions[parseInt(questionIndex)];
// //   const [name, setName] = useState('');
// //   const [answer, setAnswer] = useState('');
// //   const [message, setMessage] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (answer === question.answer) {
// //       setMessage(`Congratulations, ${name}!`);
// //     } else {
// //       setMessage(`Sorry, ${name}. Your answer is wrong.`);
// //     }

// //     // Reset the input fields after submission
// //     setName('');
// //     setAnswer('');

// //     // Navigate back to the main screen after a delay
// //     setTimeout(() => {
// //       navigate('/');
// //     }, 3000);
// //   };

// //   return (
// //     <div style={{ textAlign: 'center' }}>
// //       <h1>Player Screen</h1>
// //       {/* Removed the question display */}
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Enter your name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="text"
// //           placeholder="Your answer"
// //           value={answer}
// //           onChange={(e) => setAnswer(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Submit</button>
// //       </form>
// //       {message && <h3>{message}</h3>}
// //     </div>
// //   );
// // };

// // export default PlayerScreen;


// // src/PlayerScreen.js
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

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
//   // add more questions here...
// ];

// const PlayerScreen = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answer, setAnswer] = useState('');
//   const [message, setMessage] = useState('');
//   const location = useLocation();
//   const playerName = new URLSearchParams(location.search).get('name');

//   // Assume the admin updates the currentQuestion index globally
//   // Here you can replace this with real-time updates from the admin (e.g., using WebSocket)
//   useEffect(() => {
//     // Simulate getting a new question every 5 seconds
//     const interval = setInterval(() => {
//       setCurrentQuestion((prev) => (prev + 1) % questions.length);
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const question = questions[currentQuestion];
//     if (answer === question.answer) {
//       setMessage(`Congratulations, ${playerName}! Correct answer.`);
//     } else {
//       setMessage(`Sorry, ${playerName}. Wrong answer.`);
//     }

//     // Reset answer field
//     setAnswer('');
//   };

//   const question = questions[currentQuestion];

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Question for {playerName}</h1>
//       <h2>{question.question}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your answer"
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {message && <h3>{message}</h3>}
//     </div>
//   );
// };

// export default PlayerScreen;



import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const questions = [
    {
        question: 'What is the capital of India?',
        options: ['Mumbai', 'Delhi', 'Jaipur', 'Nagpur'],
        answer: 'Mumbai',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars',
      },
      {
        question: 'National Animal of India',
        options: ['Tiger', 'Elephant', 'Lion', 'Dog'],
        answer: 'Lion',
      },
      {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        answer: 'Blue Whale',
      },
      {
        question: 'Independence day of India',
        options: ['15 Aug', '22 Aug', '26 Jan', '2 Oct'],
        answer: '15 Aug',
      }
];

const PlayerScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const playerName = new URLSearchParams(location.search).get('name');

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
      setMessage(`Congratulations, ${playerName}! Correct answer.`);
    } else {
      setMessage(`Sorry, ${playerName}. Wrong answer.`);
    }
  };

  const handleNextQuestion = () => {
    // Proceed to the next question
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    // Reset state
    setSelectedOption('');
    setMessage('');
  };

  const question = questions[currentQuestion];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Question for {playerName}</h1>
      <h2>{question.question}</h2>
      <form onSubmit={handleSubmit}>
        {/* Render the options as radio buttons */}
        {question.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                required
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit">Submit Answer</button>
      </form>
      {message && <h3>{message}</h3>}
      
      {/* Next Question Button */}
      {message && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default PlayerScreen;
