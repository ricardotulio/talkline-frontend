import React from 'react'
import { TextField } from '@mui/material'
import style from './style.module.css'

export const SearchBar = () => {
  return (
    <div className={style.container}>
        <TextField
          className={style.searchBar}
          id="standard-helperText"
        />
    </div>
  )
}