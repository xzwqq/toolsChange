import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerActions } from '../model/containerSlice.ts';
import { RootState } from '../../../app/store/store.ts';
import './containerStyle.scss'
import { Link } from 'react-router-dom';
import { content } from '../type/container_type.ts';

const Container = ({type}: { type: string }) => {
	const container = useSelector((state: RootState) => state.container.container);
	const dispatch = useDispatch();


	

	useEffect(() => {
		if (type === 'my') {
			dispatch(ContainerActions.submitMyContainer());
		} else {
			dispatch(ContainerActions.submitAllContainer());
		}
	}, [dispatch, type]);

	return (
		<div className='container'>
			{container?.map((content: content) => {
				if (type === 'my') {
					return (
						<div key={content.id} className='container-item'>
							<img src={content.photos[0]} className='img' alt='фото обьявления' />
							<h2>{content.owner.firstname}</h2>
							<button onClick={() => dispatch(ContainerActions.submitDeleteMyContainer({ id: content.id }))}>delete</button>
							<Link to={`/edit/${content.id}`}>edit</Link>
						</div>
					)
				}else{
                    return (
						<div key={content.id} className='container-item'>
							<img src={content.photos[0]} className='img' alt='фото обьявления' />
							<h2>{content.owner.firstname}</h2>
						</div>
                    )
                }
			})}
		</div>
	);
};

export default Container;
