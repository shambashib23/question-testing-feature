import React, { useState, useEffect } from 'react';

import Axios from 'axios';
function App() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }, []);
  console.log(questions);




  return (
    <>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>Question {index + 1}</h3>
          <p>{question.text}</p>
          <textarea placeholder="Enter your answer here"></textarea>
          <div>Hello Wordl</div>
        </div>
      ))}
      : <p>Error hochhe leora!</p>

    </>


  )

}
export default App
