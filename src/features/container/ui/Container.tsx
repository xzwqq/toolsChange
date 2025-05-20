import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerActions } from '../model/containerSlice.ts';
import { RootState } from '../../../app/store/store.ts';
import { Link } from 'react-router-dom';
import { content } from '../type/container_type.ts';
import { history } from '../../../app/providers/history.ts';
import editcont from "../../../shared/svgImage/editcontainer.svg"
import subway from '../../../shared/svgImage/subway_delete.svg'
import Spinner from '../../../widgets/spinner/Spinner.tsx';
import './containerStyle.scss'

const Container = ({type}: { type: string }) => {
	const container = useSelector((state: RootState) => state.container.container);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(ContainerActions.reset())
		if (type === 'my') {
			dispatch(ContainerActions.submitMyContainer());
		} else {
			dispatch(ContainerActions.submitAllContainer());
		}
	}, []);

	if(!container.length){
		console.log(container)
		return(
			<>
			<Spinner/>
			</>
		)
	}


	if (type === 'my') {
		return(
			<div className="my">
			{container?.map((content: content) => {
			return (
				<div key={content.id} className='my_item'>
					<img src={content.photos[0]} className='my_img' alt='фото обьявления' />
					<div className="my_item_inline">
					<div className="my_info">
						<h2 className='my_text'>{content.category.name}</h2>
						<h2 className='my_text'>{content.price}₽</h2>
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
} else{
	return(
		<div className="root_container">
		<div className='container'>
			{container?.map((content: content) => {
                 return (
	 					<div key={content.id} onClick={() => history.push(`/advert/${content.id}`)} className='container_item'>
	 						<img src={content.photos[0]} className='container_img' alt='фото обьявления' />
	 						<h2 className='container_text'>{content.category.name}</h2>
	 						<h2 className='container_text'>{content.price}₽</h2>
	 					</div>
                     )
                 }
			)}
	 	</div>
		</div>
	)
}
};

export default Container;
