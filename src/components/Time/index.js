import React from 'react'
import style from './style.module.css'

export const Time = (props) => {
  return (
    <div className={style.time}>{props.children}</div>
  )
}