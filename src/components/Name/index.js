import React from 'react'
import style from './style.module.css'

export const Name = (props) => {
  return (
    <div className={style.name}>
      <h3>{props.children}</h3>
    </div>
  )
}