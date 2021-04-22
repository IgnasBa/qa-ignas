import { Link } from "@reach/router";
import AddQuestion from "./AddQuestion";

function Questions(props) {
  const { data, addQuestion } = props;

  return (
    <>
      <h3>Questions</h3>
      <ol>
        {
          data.map( question => <li>
            <Link to={`/answer/${question._id}`}>{question.title}</Link>
          </li> )
        }
      </ol>

      <AddQuestion addQuestion={addQuestion}/>
    </>
  );
}

export default Questions;
