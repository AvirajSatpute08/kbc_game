// // PlayerInput.js
// import React, { useState } from 'react';

// const PlayerInput = ({ onPlayerSubmit }) => {
//   const [name, setName] = useState('');
//   const [answer, setAnswer] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onPlayerSubmit(name, answer);
//     setName('');
//     setAnswer('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Your answer"
//         value={answer}
//         onChange={(e) => setAnswer(e.target.value)}
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default PlayerInput;




// src/PlayerInput.js
import React, { useState } from 'react';

const PlayerInput = ({ onPlayerSubmit, isAnswered }) => {
  const [name, setName] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && answer) {
      onPlayerSubmit(name, answer);
      setName('');
      setAnswer('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        disabled={isAnswered} // Disable input after submission
      />
      <input
        type="text"
        placeholder="Your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
        disabled={isAnswered} // Disable input after submission
      />
      <button type="submit" disabled={isAnswered}>Submit</button>
    </form>
  );
};

export default PlayerInput;
