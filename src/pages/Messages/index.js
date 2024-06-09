import React from 'react'
import { SidebarContainer } from '../../containers/SidebarContainer'
import { ChatContainer } from '../../containers/ChatContainer'
import style from './style.module.css'

export const Messages = () => {
  return (
    <div className={style.container}>
      <ChatContainer className={style.chatContainer} />
    </div>
  )
}