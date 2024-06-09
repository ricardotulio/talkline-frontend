import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'


export const Login = () => {
  const navigate = useNavigate() 

  const handleSubmit = (event) => {    
    event.preventDefault()
    navigate('/k')
    console.log('teste')
  }

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id='country'>Country</InputLabel>
          <Select required>
            <MenuItem value={'PT'}>PT</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField id='phone-number' label="Phone Number" />
        </FormControl>
        <FormControlLabel control={<Checkbox checked />} label="Keep me signed in" />
        <FormControl fullWidth>
          <Button type='submit' variant='contained'>Next</Button>
        </FormControl>
      </form>
    </div>
  )
}