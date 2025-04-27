import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../../features/container/index.ts';
import { InitHeader } from '../../../widgets/Header/index.ts';
import { RootState } from '../../../app/store/store.ts';
import { history } from '../../../app/providers/history.ts';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import './myprofile.scss';

interface content {
	owner: {
		firstname: string;
		id: string | number;
	};
}
const MyProfile: React.FC = () => {
	const dispatch = useDispatch();
	const zalupa = 'my';
	const container: content = useSelector(
		(state: RootState) => state.container.container[0]
	);

	const removetoken = () => {
		localStorage.clear();
		dispatch(HelperActions.setSucsses('Вы успешно вышли!'));
		history.push('/login');
	};
	return (
		<>
			<InitHeader />
			<div className='root__my'>
				<Container type={zalupa} />
				<div className='myProfile'>
					<img
						src='../../../public/svgImage/MyProfile.svg'
						alt='myProfile'
						className='myProfile_img'
					/>
					<p className='myProfile_name'>{container?.owner.firstname}</p>
					<button className='myProfile_button'>Мои заказы</button>
					<button
						onClick={() => history.push(`/rating/${container?.owner.id}`)}
						className='myProfile_button'
					>
						Отзывы
					</button>
					<button className='myProfile_button'>Обьявления</button>
					<button
						className='myProfile_button red'
						onClick={() => removetoken()}
					>
						Выйти из аккаунта
					</button>
				</div>
			</div>
		</>
	);
};

export default MyProfile;
