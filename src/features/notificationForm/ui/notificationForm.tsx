import React, { useEffect } from 'react'
import { RootState } from '../../../app/store/store.ts';
import { useDispatch, useSelector } from 'react-redux'
import { NotifAction } from '../model/notifSlice';
import { notifresponse } from '../type/notif.type.ts';
import './notifstyle.scss'

export const NotificationForm: React.FC = () => {
  const container = useSelector((state: RootState) => state.notif.response)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NotifAction.submitNotif())
  },[])


  return (
    <div className='root-notif'>
      {container?.map((item: notifresponse , id) => {
        console.log(item)
        return(
          <div key={id} className="block-notif">

          </div>
        )
      })}
    </div>
  )
}

