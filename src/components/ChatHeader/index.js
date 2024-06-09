import React from 'react'
import { Avatar } from '../Avatar'
import { BackButton } from '../BackButton'
import { Name } from '../Name'
import style from './style.module.css'

export const ChatHeader = () => {
  return (
    <div className={style.chatHeader}>
      <BackButton />
      <Avatar />
      <Name>Joaquim</Name>
    </div>
  )
}