import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerActions } from '../model/containerSlice.ts';
import { RootState } from '../../../app/store/store.ts';
import { content } from '../type/container_type.ts';
import './containerStyle.scss'
import Mycontainer from './mycontainer.tsx';
import Allscontainer from './Allcontainer.tsx';

interface ContainerProps {
  type: 'my' | 'all';
}

const Container = ({type}: ContainerProps) => {
	const container: Array<content> = useSelector((state: RootState) => state.container.container);
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
		return(
			<>
				<h3 className='not-gound-conatn'>Здесь пока ничего нет...</h3>
			</>
		)
	}
	return type === 'my' ? (
    <Mycontainer data={container} />
  ) : (
    <Allscontainer data={container} />
  );

};

export default Container;
