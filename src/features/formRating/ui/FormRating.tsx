import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { RatingActions } from '../model/ratingSlice';

const FormRating: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(RatingActions.submitRating())
    })
  return (
    <div>FormRating</div>
  )
}

export default FormRating