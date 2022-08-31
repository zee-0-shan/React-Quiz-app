import { TextField, MenuItem, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Home.css'
import Categories from '../../Data/Categories'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'


export default function Home({ name, setName ,fetchQuestion}) {

    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)

    const navigate=useNavigate()

    const handleSubmit =()=>{

        if(!name || !category || !difficulty){
            setError(true)
            return
        }
        else{
            setError(false)
            fetchQuestion(category,difficulty)
            navigate("/quiz")
        }
    }

    return (
        <div className='content'>
            <div className="settings">
                <span>Quiz settings</span>

                <div className="settings_select">
                    {error && <ErrorMessage>Please fill in all the details</ErrorMessage>}
                    <TextField
                        style={{ marginBottom: 20 }}
                        label="Enter your name"
                        variant='outlined'
                        onChange={(e) => setName(e.target.value)}
                        value={name} />


                    <TextField
                        select
                        variant='outlined'
                        label="select the type"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}>
                        {
                            Categories.map((cat) => <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>)
                        }
                    </TextField>
                    <TextField select
                        variant='outlined'
                        label="Select difficulty"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}>
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>

                    <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>Start Quiz</Button>
                </div>

            </div>
            <img className='banner' src=".\quiz_home.svg" alt="quiz_img" />
        </div>
    )
}
