import React from 'react'
import {useState} from "react"
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const QuestionForm = (props) => {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.length === 0) {
      setIsError(true)
      return
    }

    props.onSubmit(value)
  }

  const showError = isError && value.length === 0

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <p>Enter the number you want to test your self on. Hit submit and see if you can remember it.</p>
        <TextField
          id="question"
          label="Enter any number"
          variant="outlined"
          type="text"
          autoComplete="off"
          autoFocus
          fullWidth
          value={value}
          onChange={e => setValue(e.target.value)}
          helperText={showError ? 'A number is required' : null}
          error={showError}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
      >
        Submit
      </Button>
    </form>
  )
}

export default QuestionForm