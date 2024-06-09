import React from 'react'
import { Avatar } from '../Avatar'
import { Notifications } from '../Notifications'
import { Time } from '../Time'
import { Name } from '../Name'
import { SidebarMessage } from '../SidebarMessage'
import style from './style.module.css'

export const SidebarChat = (props) => {
  return (
    <div className={style.chatContainer}>
      <div className={style.avatar}>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </div>
      <div className={style.chat}>
        <div className={style.chatHeader}>
          <Name>{props.message.from}</Name>
          <Time>{props.message.time}</Time>
        </div>
        <div className={style.message}>
          <SidebarMessage>{props.message.text}</SidebarMessage>
          <Notifications>{props.message.notifications}</Notifications>
        </div>
      </div>
    </div>
  )
}