import React, { useEffect } from 'react';
import { RootState } from '../../../app/store/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { NotifAction } from '../model/notifSlice';
import { notifresponse } from '../type/notif.type.ts';
import accept from '../../../shared/svgImage/galka4.svg'
import krest from '../../../shared/svgImage/krestik.svg'
import { NotivRating } from './notifRating.tsx';
import './notifstyle.scss';
import { LoadingText } from '../../../widgets/spinner/DotSpinner.tsx';
import { useNavigate } from 'react-router';


export const Notificationin: React.FC = () => {
  const navigate = useNavigate();
	const dispatch = useDispatch();
	const container = useSelector((state: RootState) => state.notif.response);
	const status = useSelector((state: RootState) => state.notif.status);

  const answernotif = (id: string, type: string) => {
    const data = {
      id: id,
      type: type
    }
    dispatch(NotifAction.acceptNotif(data))
  }

	useEffect(() => {
		dispatch(NotifAction.submitNotif('in'));
	}, []);

  const whoType = (type: string, item: notifresponse) => {
    if(type === 'RENT'){
      return (
        <>
          <p className='info-p-tool'>Арендовать за {item?.price} ₽</p>
          <p className='info-p-tool'>от {item?.startDate}</p>
          <p className='info-p-tool'>до {item?.endDate}</p>
          <p className='info-p-tool'>Сообщение:<br/>{item?.message}</p>
        </>
      )
    }else if(type === 'SALE'){
      return(
        <>
          <p className='info-p-tool'>Купить за {item?.price} ₽</p>
          <p className='info-p-tool'>Сообщение:<br/>{item?.message}</p>
        </>
      )
    }
  }

  const statusNotif = (id: string, status: string) => {
    if(status === 'PENDING'){
      return (
        <>
          <button className='info-acc-but' onClick={() => answernotif(id, 'confirm')}><img src={accept} alt="accept" /></button>
          <button className='info-acc-but sitx' onClick={() => answernotif(id, 'cancel')}><img src={krest} alt="cancel" /></button>
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
    }else if(status === 'ALLDONE') {
      return(
        <p className='info-p-tool'>Статус:<br/> <span className='info-p-tool p-green'>Сделка Завершилась</span></p>
      )
    }
  }

if(status){
		return(
			<div className='not-gound-conatn'>
				<LoadingText />
			</div>
		)
	}
	if(!container.length){
		return(
			<div className='not-gound-conatn'>
				<p className='not-gound-conatn-p'>Уведомлений еще нет</p>
			</div>
		)
	}

	return (
		<div className='root-notif'>
			{container?.map((item: notifresponse, id) => {
				return (
					<div key={id} className='block-notif'>
            <div className="all-iongo">
              <div className='info-notif'>
                <button className='border-nah' onClick={() => navigate(`/advert/${item?.tool.id}`)}><img src={item?.tool.photos[0]} alt='photo notif' className='info-img'/></button>
                <div className='info-init-tool'>
                  <div className='info-tool'>
                    <p className='info-p-tool'>{item?.tool.category.name},</p>
                    <p className='info-p-tool'>{item?.tool.manufacturer.name}</p>
                  </div>
                  <p className='info-p-tool'>Ваша цена: {item?.tool.price} ₽</p>
                </div>
              </div>
              <div className="req-info">
                <p className='info-p-tool'>{item?.requester.firstname} предлагает:</p>
                {whoType(item?.tool.type, item)}
              </div>
              <div className="info-acc">
                {statusNotif(item?.id, item?.status)}
              </div>
					  </div>
            {item?.status === 'APPROVED' && <h2 className='otziv-h2'>Хотите оставить Отзыв?</h2>}
            <NotivRating status={item?.status} id={item?.id}/>
          </div>
				);
			})}
		</div>
	);
};
