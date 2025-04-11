import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { RatingActions } from '../model/ratingSlice';

const FormRating: React.FC = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(RatingActions.submitRating(id))
    })
  return (
    <div>FormRating</div>
  )
}

export default FormRating