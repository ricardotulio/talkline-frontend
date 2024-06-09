import React from 'react'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'

export const Authentication = () => {
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    const value = e.target.value
  
    if (value.length >= 6) {
      navigate('/messages')
    }
  }

  return (
    <div>
      <p>We have sent yhou a text message with the code.</p>
      <form>
        <FormControl fullWidth>
          <TextField onChange={handleChange} id='confirmation-code' label="Code" />
        </FormControl>
      </form>
    </div>
  )
}