import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerActions } from '../model/containerSlice.ts';
import { RootState } from '../../../app/store/store.ts';
import { content } from '../type/container_type.ts';
import './containerStyle.scss'
import Mycontainer from './mycontainer.tsx';
import Allscontainer from './Allcontainer.tsx';
import { LoadingText } from '../../../widgets/spinner/DotSpinner.tsx';

interface ContainerProps {
  type: 'my' | 'all';
}

const Container = ({type}: ContainerProps) => {
	const container: Array<content> = useSelector((state: RootState) => state.container.container);
	const status: boolean = useSelector((state: RootState) => state.container.status);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(ContainerActions.reset())
		if (type === 'my') {
			dispatch(ContainerActions.submitMyContainer());
		} else {
			dispatch(ContainerActions.submitAllContainer());
		}
	}, []);

	if(status){
		return(
			<div className='not-gound-conatn'>
				<LoadingText />
			</div>
		)
	}
	if(!container.length){
		return(
			<div className='not-gound-conatn'>
				<p className='not-gound-conatn-p'>Обьявлений еще нет(</p>
			</div>
		)
	}
	return type === 'my' ? (
    <Mycontainer data={container} />
  ) : (
    <Allscontainer data={container} />
  );

};

export default Container;
