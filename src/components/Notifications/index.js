import React from 'react'
import style from './style.module.css'

export const Notifications = (props) => {
  return (
    <div className={style.notifications}>{props.children}</div>
  )
}