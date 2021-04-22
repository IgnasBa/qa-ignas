import { useState } from 'react';

function AddAnswer(props) {
  const {answer, id} = props;

  const [answerText, setAnswer] = useState("");



  // Conditional rendering
  return (
    <>
      <h3>Add Answer</h3>

      <input onChange={(event) => setAnswer(event.target.value)} type="text" />

      <button type="button" onClick={(event) => {
        answer(answerText, id);
      }}>Add Answer
      </button>
    </>
  );
}

export default AddAnswer;
