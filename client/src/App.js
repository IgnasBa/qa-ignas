import {useEffect, useState} from "react";
import { Router, Link } from "@reach/router";
import Questions from "./Questions";
import Question from "./Question";

const API_URL = process.env.REACT_APP_API;


function App() {
  const [questions, setQuestions] = useState([]);

  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/questions`;
      const response = await fetch(url);
      const questions = await response.json();
      setQuestions(questions);
    }
    getData();
  }, []); 

  function addQuestion(title, text) {


    const data = { 
      title: title,
      text: text
    };
    const postData = async () => {
      //const url = "http://localhost:8081/api/cooking";
      const url = `${API_URL}/questions`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const reply = await response.json();

    }; 
    postData();
  }
  function Answer(answer, id) {
    console.log(answer);

    const data = { 
      answer: answer 
    };
    const postData = async () => {
      //const url = "http://localhost:8081/api/cooking";
      const url = `${API_URL}/questions/answer/${id}`;

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const reply = await response.json();
      console.log(reply);

    }; 
    postData();
  }
  function Upvote(id, answerid) {

    const postData = async () => {
      //const url = "http://localhost:8081/api/cooking";
      const url = `${API_URL}/questions/answer/${id}/upvote/${answerid}`;

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const reply = await response.json();
      console.log(reply);

    }; 
    postData();
  }
  function Downvote(id, answerid) {

    const postData = async () => {
      //const url = "http://localhost:8081/api/cooking";
      const url = `${API_URL}/questions/answer/${id}/downvote/${answerid}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const reply = await response.json();
      console.log(reply);

    }; 
    postData();
  }


  return (
    <>
    <Link to="/">Home</Link>
      <h1>Questions and Answers</h1>
      <p>Here you can post your Questions and get some Answers!</p> 
      <Router>
        <Questions path="/" data={questions} addQuestion={addQuestion} ></Questions>
        <Question path="/answer/:id" data={questions} answer={Answer} upvote={Upvote} downvote={Downvote} ></Question>
      </Router>
   
    </>
  );
}

export default App;
