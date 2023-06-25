import React, {useState} from "react";
import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random";


function Eightball({answers = defaultAnswers}) {
 const [answer, setAnswers] = useState({
    msg: "Think of a Question",
    color: "black"
 })


function handleClick(evt) {
    setAnswers(choice(answers));
  }

  return (
    <div
    className = "EightBall"
    onClick={handleClick}
    style = {{backgroundColor: answer.color}}
    >
       <b>{answer.msg}</b> 
    </div>
  )
}

export default Eightball