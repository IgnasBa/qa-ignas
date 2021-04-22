import { useState } from 'react';

function AddQuestion(props) {
  const { addQuestion } = props;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // Conditional rendering
  return (
    <>
      <h3>Add a question</h3>
      <div class="inline">
      <h4>Title</h4>
      <input onChange={(event) => setTitle(event.target.value)} type="text" />
      </div>
      <div class="inline">
      <h4>Text</h4>
      <input onChange={(event) => setText(event.target.value)} type="text" />
      </div>


      <button type="button" onClick={(event) => {
        addQuestion(title, text);
      }}>Add Question
      </button>
    </>
  );
}

export default AddQuestion;
