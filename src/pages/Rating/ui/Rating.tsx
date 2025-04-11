import React from 'react'
import { FormRating } from '../../../features/formRating/index.ts';
import { InitHeader } from '../../../widgets/Header/index.ts';

const Rating: React.FC = () => {
  return (
    <div>
        <InitHeader/>
        <FormRating/>
    </div>
  )
}

export default Rating;