import { Button } from '@material-ui/core'
import React from 'react'
import "./result.css"

export default function Result({name,score}) {

  // const navigate =useNavigate
  // useEffect(() => {
  //   if(!name){
  //     navigate("/")
  //   }
  // }, [name,navigate])
  

  return (
    <div className='result'>
      <span className='title'>
        final score : {score}
      </span>
      <Button
      variant='contained'
      color='secondary'
      size='large'
      style={{alignSelf: "center",marginTop:20}}
      href="/"
      >Go to Homepage</Button>
    </div>
  )
}
