import { Link } from 'react-router-dom';
import editcont from "../../../shared/svgImage/editcontainer.svg"
import subway from '../../../shared/svgImage/subway_delete.svg'
import { history } from '../../../app/providers/history.ts';
import { ContainerActions } from '../model/containerSlice.ts';
import { content } from '../type/container_type'
import { useDispatch } from 'react-redux';

interface MyContainerProps {
  data: Array<content>;
}

const Mycontainer = ({data}: MyContainerProps) => {
   const dispatch = useDispatch();
  return(
         <div className="my">
         {data?.map((content: content) => {
         return (
            <div key={content.id} className='my_item'>
               <img src={content.photos[0]} className='my_img' alt='фото обьявления' />
               <div className="my_item_inline">
               <div className="my_info">
                  <h2 className='my_text'>{content.category.name}</h2>
                  <h2 className='my_text'>{content.price} ₽</h2>
               </div>
               <div className="my_button">
                  <button onClick={() => history.push(`/advert/${content.id}`)} className='my_button_discription'>Подробности</button>
                  <Link className='my_button_edit' to={`/edit/${content.id}`}><img src={editcont} alt="edit" className='my_edit' /></Link>
                  <button className='my_button_delete' onClick={() => dispatch(ContainerActions.submitDeleteMyContainer({ id: content.id }))}><img src={subway} alt='delete' className='my_delete'/></button>
               </div>
               </div>
            </div>
         )})}
      </div>
   )
}

export default Mycontainer