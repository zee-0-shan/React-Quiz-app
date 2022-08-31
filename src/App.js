import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/result/Result'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [name, setName] = useState("")
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState("")

  const fetchQuestion=async(category="", difficulty="")=>{

const {data}= await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);

setQuestions(data.results)
  }

  return (
    <BrowserRouter>
      <div className="app" style={{ background: "url(./quiz_background.jpg)" }}>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home name={name} setName={setName} fetchQuestion={fetchQuestion}/>} />
          <Route exact path='/quiz' element={<Quiz name={name} score={score} setScore={setScore} questions={questions} setQuestions={setQuestions} />} />
          <Route exact path='/result' element={<Result name={name} score={score}/>} />
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
