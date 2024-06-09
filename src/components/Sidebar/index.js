import React from 'react'
import { SidebarChat } from '../SidebarChat'
import { SearchBar } from '../SearchBar'
import style from './style.module.css'

export const Sidebar = (props) => {
  console.log(props.messages)
  
  return (
    <div className={style.container}>
      <SearchBar />
      <div className={style.messages}>
        {props.messages.map((message) => <SidebarChat message={message}></SidebarChat>)}
      </div>
    </div>  
  )
}