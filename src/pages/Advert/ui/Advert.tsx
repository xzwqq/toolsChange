import React from 'react'
import { InitHeader } from '../../../widgets/Header';
import { FormAdvert } from '../../../features/FormAdvert';

const Advert: React.FC = () => {
  return (
    <div>
      <InitHeader/>
      <FormAdvert/>
    </div>
  )
}

export default Advert;