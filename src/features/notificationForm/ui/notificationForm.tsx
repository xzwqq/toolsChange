import React, { useState } from 'react'
import './notifstyle.scss'
import { Notificationout } from './notificationout'
import { Notificationin } from './notfifcationin'

export const NotificationForm: React.FC = () => {
  const [status, setStatus] = useState(true) 
  return (
    <div className='notif-root'>
        <div className='toggle-notif'>
          <button onClick={() => setStatus(true)} className='button-toogle-notif'>Входящие/</button>
          <button onClick={() => setStatus(false)} className='button-toogle-notif'>Исходящие</button>
        </div>
        {status ? <Notificationin/> : <Notificationout/>}
    </div>
  )
}

