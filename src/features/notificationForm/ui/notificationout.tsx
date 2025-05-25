import React, { useEffect } from 'react';
import { RootState } from '../../../app/store/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { NotifAction } from '../model/notifSlice';
import { notifresponse } from '../type/notif.type.ts';

import { history } from '../../../app/providers/history.ts';
import './notifstyle.scss';

const statusNotif = ( status: string) => {
    if(status === 'PENDING'){
      return (
        <>
          <p className='info-p-tool'>Статус: <span className='info-p-tool '>Рассматривается</span></p>
        </>
      )
    }else if(status === 'REJECTED') {
      return(
        <p className='info-p-tool'>Статус: <span className='info-p-tool p-red'>Отказано</span></p>
      )
    }else if(status === 'APPROVED') {
      return(
        <p className='info-p-tool'>Статус: <span className='info-p-tool p-green'>Одобрено</span></p>
      )
    }
  }
  const whoType = (type: string, item: notifresponse) => {
      if(type === 'RENT'){
        return (
          <>
            <p className='info-p-tool'>Арендовать за {item?.price} ₽</p>
            <p className='info-p-tool'>{item?.message}</p>
            <p className='info-p-tool'>от {item?.startDate}</p>
            <p className='info-p-tool'>до {item?.endDate}</p>
          </>
        )
      }else if(type === 'SALE'){
        return(
          <>
            <p className='info-p-tool'>Купить за {item?.price} ₽</p>
          </>
        )
      }
    }

export const Notificationout: React.FC = () => {
  const container = useSelector((state: RootState) => state.notif.response);
  const dispatch = useDispatch();


  useEffect(() => {
      dispatch(NotifAction.submitNotif('out'));
  }, []);

  if(!container.length){
		return(
			<>
				<h3 className='not-gound-conatn'>Здесь пока ничего нет...</h3>
			</>
		)
	}
  
  return (
    <div className='root-notif'>
          {container?.map((item: notifresponse, id) => {
            return (
              <div key={id} className='block-notif'>
                <div className="all-iongo">
                  <div className='info-notif'>
                    <button className='border-nah' onClick={() => history.push(`/advert/${item?.tool.id}`)}><img src={item?.tool.photos[0]} alt='photo notif' className='info-img'/></button>
                    <div className='info-init-tool'>
                      <div className='info-tool'>
                        <p className='info-p-tool'>{item?.tool.category.name},</p>
                        <p className='info-p-tool'>{item?.tool.manufacturer.name}</p>
                      </div>
                      <p className='info-p-tool'>Цена: {item?.tool.price} ₽</p>
                    </div>
                  </div>
                  <div className="req-info">
                    <p className='info-p-tool'>Вы предлагаете:</p>
                    {whoType(item?.tool.type, item)}
                  </div>
                  <div className="info-acc">
                    {statusNotif(item?.status)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  )
}

