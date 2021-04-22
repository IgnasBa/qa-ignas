import AddAnswer from "./Answer";
import Rating from "./Rating";


function Question(props) {
  const {id, data, answer, downvote, upvote} = props;

  // Conditional rendering
  return (
    <>
      <ol>
        {
          data.map( question => {
            if (question._id === id){ return (

            <>
            
            
            <h3>{question.title}</h3>
            <p>{question.text}</p>

            <AddAnswer id={id} answer={answer} />
            <h1>Answers:</h1>
            
            {question.answers.map( answer => {
            return (<><div class="answerDiv">
              <div class="inline"><div class="ratingsDiv"><p>rating</p> <div class="ratingDiv"><p>{answer.rating}</p></div></div>
              <Rating downvote={downvote} upvote={upvote} id={id} answerid={answer._id}/></div><div class="inline"> <p>{answer.answer}</p></div></div>
             
              </>
              
            )
            })}
            </>
            
            
            )
            }
           
          
            
           } )
        }
      </ol>
    </>
  );
}

export default Question;
