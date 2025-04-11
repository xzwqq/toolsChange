import React from 'react'
import { EditContainer } from '../../../features/editContainer/index.ts'
import { InitHeader } from '../../../widgets/Header/index.ts'

const Edit: React.FC = () => {
  return (
    <div>
        <InitHeader/>
        <EditContainer/>
    </div>
  )
}

export default Edit