import React from 'react'
import {useState} from "react"
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

const AnswerForm = (props) => {
  const [value, setValue] = useState('')

  const showError = !props.isCorrect && value.length > 0

  const handleChange = (event) => {
    setValue(event.target.value)
    props.onChange(event.target.value)
  }

  return (
    <Box mb={2}>
      <p>Enter your number from memory and see if you are correct.</p>
      <TextField
        id="answer"
        label="Enter your answer"
        variant="outlined"
        type="text"
        autoFocus
        autoComplete="off"
        fullWidth
        value={value}
        onChange={handleChange}
        helperText={showError ? 'Not quite, Keep trying' : null}
        error={showError}
      />
    </Box>
  )
}

export default AnswerForm