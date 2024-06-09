import React from 'react'
import style from './style.module.css'
import { ChatHeader } from '../ChatHeader'

export const Chat = (props) => {
  return (
    <div {...props}>
      <ChatHeader />
    </div>
  )
}