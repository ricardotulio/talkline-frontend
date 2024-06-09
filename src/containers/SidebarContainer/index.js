import { Sidebar } from '../../components/Sidebar'

export const SidebarContainer = () => {
  const messages = [
    {
      from: 'Joaquim',
      time: '10:22',
      text: 'mensagem...',
      notifications: 3
    },
    {
      from: 'Maria',
      time: '10:22',
      text: 'mensagem...',
      notifications: 3
    },
    {
      from: 'Tiago',
      time: '10:22',
      text: 'mensagem...',
      notifications: 3
    },
  ]

  console.log(messages)

  return (
    <Sidebar messages={messages}></Sidebar>
  )
}