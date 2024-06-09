import React from 'react'
import style from './style.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const BackButton = (props) => (
  <div {...props} className={style.backButton}><ArrowBackIcon /></div>
)