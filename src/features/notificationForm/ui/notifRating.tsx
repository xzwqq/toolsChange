import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NotifAction } from '../model/notifSlice';
import { ratingType } from '../type/notif.type.ts';
import star from '../../../shared/svgImage/fullStar.svg'
import anstar from '../../../shared/svgImage/anlessStar.svg'
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
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
      return star
    }else{
      return anstar
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
    if(rating.message === '' || rating.rating <= 0) return dispatch(HelperActions.setErrorNetwork('Заполните все поля!'))
    const updatedRating = { ...rating, dealId: id };
    setRating(updatedRating);  
    dispatch(NotifAction.sendRatingSags(updatedRating));
  }


  if(status === 'APPROVED'){
    return (
      <div className='sendRating'>
        <input onChange={(e) => changeRating('message', e.target.value)} className='inputRatingsend' placeholder='Сообщение' type="text" />
          <div className="stars">
            <button onClick={() => changeRating('rating',1)} className={`star`}><img className='starsvg' src={ratingstars(1)} alt="" /></button>
            <button onClick={() => changeRating('rating',2)} className={`star`}><img className='starsvg' src={ratingstars(2)} alt="" /></button>
            <button onClick={() => changeRating('rating',3)} className={`star`}><img className='starsvg' src={ratingstars(3)} alt="" /></button>
            <button onClick={() => changeRating('rating',4)} className={`star`}><img className='starsvg' src={ratingstars(4)} alt="" /></button>
            <button onClick={() => changeRating('rating',5)} className={`star`}><img className='starsvg' src={ratingstars(5)} alt="" /></button>
          </div>
          <button onClick={() =>sendRating(id)} className='sendbuttonratting'>Отправить</button>
        </div>
      )
    }
  }