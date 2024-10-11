// // QuestionDisplay.js
// import React from 'react';

// const QuestionDisplay = ({ question }) => {
//   return (
//     <div>
//       <h2>{question.question}</h2>
//       <ul>
//         {question.options.map((option, index) => (
//           <li key={index}>{option}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default QuestionDisplay;




// src/QuestionDisplay.js
import React from 'react';

const QuestionDisplay = ({ question }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionDisplay;
