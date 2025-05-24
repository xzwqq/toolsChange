import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NotifAction } from '../model/notifSlice';
import { ratingType } from '../type/notif.type.ts';
import star from '../../../shared/svgImage/star.svg'
import './notifstyle.scss';
interface RatingNotifProps {
  status: string;
  id: string;
}

export const NotivRating: React.FC<RatingNotifProps> = ({status, id}) => {
  const [rating, setRating] = useState<ratingType>({
    message: '',
    rating: 0,
    dealId: 0,
  })
	const dispatch = useDispatch();

  const ratingstars = (idstar: number) => {
    if(idstar <= rating.rating){
      return 'okstars'
    }
  } 

  const changeRating = (name: string, value: number | string) => {
    setRating(prev => ({
      ...prev,
      [name]: value
    }))
    console.log(rating)
  }

  const sendRating = (id: string | number) => {
    const updatedRating = { ...rating, dealId: id };
    setRating(updatedRating);  
    dispatch(NotifAction.sendRatingSags(updatedRating));
  }


  if(status === 'APPROVED'){
    return (
      <div className='sendRating'>
        <input onChange={(e) => changeRating('message', e.target.value)} className='inputRatingsend' placeholder='Сообщение' type="text" />
          <div className="stars">
            <button onClick={() => changeRating('rating',1)} className={`star ${ratingstars(1)}`}><img className='starsvg' src={star} alt="" /></button>
            <button onClick={() => changeRating('rating',2)} className={`star ${ratingstars(2)}`}><img className='starsvg' src={star} alt="" /></button>
            <button onClick={() => changeRating('rating',3)} className={`star ${ratingstars(3)}`}><img className='starsvg' src={star} alt="" /></button>
            <button onClick={() => changeRating('rating',4)} className={`star ${ratingstars(4)}`}><img className='starsvg' src={star} alt="" /></button>
            <button onClick={() => changeRating('rating',5)} className={`star ${ratingstars(5)}`}><img className='starsvg' src={star} alt="" /></button>
          </div>
          <button onClick={() =>sendRating(id)} className='sendbuttonratting'>Отправить</button>
        </div>
      )
    }
  }