import { useSelector } from 'react-redux';
import { Container } from '../../../features/container/index.ts';
import { InitHeader } from '../../../widgets/Header/index.ts';
import { RootState } from '../../../app/store/store.ts';
import './myprofile.scss'

interface content {
	owner: {
		firstname: string;
	};
}
const MyProfile = () => {
	const zalupa = 'my';
	const container: content = useSelector(
		(state: RootState) => state.container.container[0]
	);

	return (
		<>
			<InitHeader />
			<div className='root__my'>
				<Container type={zalupa} />
				<div className='myProfile'>
					<img src='../../../public/svgImage/MyProfile.svg' alt='myProfile' className='myProfile_img'/>
					<p className='myProfile_name'>{container?.owner.firstname}</p>
					<button className='myProfile_button'>Отзывы</button>
					<button className='myProfile_button'>Мои заказы</button>
					<button className='myProfile_button'>Рудактировать</button>
					<button className='myProfile_button'>Обьявления</button>
				</div>
			</div>
		</>
	);
};

export default MyProfile;
