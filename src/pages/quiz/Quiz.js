import React from 'react'
import "./Quiz.css"
import { useState ,useEffect} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Question from '../../components/question/Question'

export default function Quiz({name ,score, setScore, questions, setQuestions}) {

const [options, setOptions] = useState("")
const [currQues, setCurrQues] = useState(0)

useEffect(() => {

setOptions(questions && handleSuffle([questions[currQues]?.correct_answer,...questions[currQues]?.incorrect_answers]))

}, [questions,currQues])

const handleSuffle=(optionss)=>{
       return optionss.sort(() => Math.random() - 0.5)
}

console.log(questions)
  return (
    <div className='quiz'>
      <span className='subtitle'>Hello {name}</span>
      {questions? 
      <>
      <div className="quizInfo">
        <span>{questions[currQues].category}</span>
        <span>Score:{score}</span>
      </div>
      <Question
        currQues={currQues}
        setCurrQues={setCurrQues}
        questions={questions}
        
        options={options}
        correct={questions[currQues]?.correct_answer}
        score={score}
        setScore={setScore}
      />
      </> 
      : <CircularProgress style={{margin:100}} color="inherit" size={150} thickness={1}/>
      }
    </div>
  )
}
