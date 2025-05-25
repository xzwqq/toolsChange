import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RatingActions } from '../model/ratingSlice';
import { RootState } from '../../../app/store/store';
import { ratingsucsses } from '../type/rating,type';
import star from '../../../shared/svgImage/fullStar.svg'
import anstar from '../../../shared/svgImage/anlessStar.svg'
import './rating.style.scss'
import { LoadingText } from '../../../widgets/spinner/DotSpinner';

const FormRating: React.FC = () => {
	const dispatch = useDispatch();
  const container: Array<ratingsucsses> = useSelector((state: RootState) => state.rating.succses);
  const status: boolean = useSelector((state: RootState) => state.rating.status);

  const ratingstars = (idstar: number, rating: number) => {
    if(idstar <= rating){
      return star
    }else{
      return anstar
    }
  } 

	useEffect(() => {
		dispatch(RatingActions.submitRating());
	},[]);

  
  if(status){
      return(
        <div className='not-gound-conatn'>
          <LoadingText />
        </div>
      )
    }
    if(!container.length){
		return(
			<>
				<h3 className='not-gound-conatn'>У вас нет отзывов</h3>
			</>
		)
	}

	return (
    <div className='root-rating'>
        {container?.map((item) => {
          return(
            <div className="root_item_rating">
              <div className="p_item_rating">
                <p className='p_rating'>Отзыв от:<br/> {item?.sender.firstname}</p>
                <p className='p_rating'>Сообщение:<br/> {item?.message}</p>
                <p className='p_rating'>Создано:<br/> {item?.createdAt}</p>
              </div>
              <div className="rating_star_dev">
                <h3 className='p_rating'>Рейтинг:</h3>
                <div className="star_item_rating">
                  <img className='starsvg' src={ratingstars(1, item?.rating)} alt="" />
                  <img className='starsvg' src={ratingstars(2, item?.rating)} alt="" />
                  <img className='starsvg' src={ratingstars(3, item?.rating)} alt="" />
                  <img className='starsvg' src={ratingstars(4, item?.rating)} alt="" />
                  <img className='starsvg' src={ratingstars(5, item?.rating)} alt="" />
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
};

export default FormRating;
