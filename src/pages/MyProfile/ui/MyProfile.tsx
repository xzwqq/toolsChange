import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../../features/container/index.ts';
import { RootState } from '../../../app/store/store.ts';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import iconProfile from '../../../shared/svgImage/MyProfile.svg'
import './myprofile.scss';
import { FormRating } from '../../../features/formRating/index.ts';
import { useNavigate } from 'react-router';

interface content {
	owner: {
		firstname: string;
		id: string | number;
	};
}
const MyProfile: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [status, setStatus] =useState(true)
	const zalupa = 'my';
	const container: content = useSelector(
		(state: RootState) => state.container.container[0]
	);

	const removetoken = () => {
		localStorage.clear();
		dispatch(HelperActions.setSucsses('Вы успешно вышли!'));
		navigate('/')
	};
	return (
		<>
			<div className='root__my'>
				{status ? <Container type={zalupa} /> : <FormRating/>}
				<div className='myProfile'>
					<img
						src={iconProfile}
						alt='myProfile'
						className='myProfile_img'
					/>
					<p className='myProfile_name'>{container?.owner.firstname}</p>
					<button onClick={() => setStatus(true)} className={`myProfile_button ${status? 'red': ''}`}>Обьявления</button>
					<button
						onClick={() => setStatus(false)}
						className={`myProfile_button ${status? '': 'red'}`}
					>
						Отзывы
					</button>
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
