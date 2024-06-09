import React from 'react'
import { Avatar as MaterialAvatar } from '@mui/material'
import style from './style.module.css'

export const Avatar = (props) => (
  <div {...props} className={style.avatar}>
    <MaterialAvatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
  </div>
)