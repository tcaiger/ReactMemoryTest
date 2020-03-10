import React from 'react'
import {useState} from "react"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Alert from '@material-ui/lab/Alert'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import QuestionForm from './QuestionForm'
import AnswerForm from "./AnswerForm"

const MemoryTest = () => {
  const [submitted, setSubmitted] = useState(false)
  const [question, setQuestion] = useState(false)
  const [answer, setAnswer] = useState(false)

  let form
  const success = answer.length > 0 && question === answer

  const handleQuestionSubmit = (value) => {
    setSubmitted(true)
    setQuestion(value)
  }

  /* Initially show the question form and show the answer form once it is submitted */
  if (!submitted) {
    form = <QuestionForm onSubmit={handleQuestionSubmit}/>
  } else {
    form = <AnswerForm onChange={value => setAnswer(value)} isCorrect={success}/>
  }

  return (
    <Box width={400} mx="auto" mt={5}>
      <Card>
        <CardContent>
          <h1>Memory Test</h1>
          {form}
          {success &&
            <Alert
              elevation={6}
              variant="filled"
              severity="success"
            >
              Well done, you remembered correctly!
              <Box mt={2}>
                <Button
                  onClick={() => window.location.reload()}
                  variant="outlined"
                >
                  Try again
                </Button>
              </Box>
            </Alert>
          }
        </CardContent>
      </Card>
    </Box>
  )
}

export default MemoryTest