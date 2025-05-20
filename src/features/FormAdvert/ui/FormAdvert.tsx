import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';
import { AdvertActions } from '../model/advertSlice';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Spinner from '../../../widgets/spinner/Spinner';
import profile from "../../..//shared/svgImage/MyProfile.svg"
import FormSendTrade from './FormSendTrade';
import './formadvert.scss';

export const type = (cont: string) => {
	if (cont === 'SALE') {
		return <p className='advert_sale'>Продажа</p>;
	}
	if (cont === 'RENT') {
		return <p className='advert_sale'>Аренда</p>;
	}
	if (cont === 'NEW') {
		return <p className='advert_sale'>Новый</p>;
	}
	if (cont === 'USED') {
		return <p className='advert_sale'>Б/У</p>;
	}
	if (cont === '') {
		return <p className='advert_sale'>Данных нету(</p>;
	}
};

const FormAdvert: React.FC = () => {
	const { id } = useParams();
	const [isVisible, setVisible] = useState(false);
	const dispatch = useDispatch();
	const container = useSelector((state: RootState) => state.advert.container);

	useEffect(() => {
		dispatch(AdvertActions.submitAdvert(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	const whois = () => {
		if(container?.owner.loginOwner !== container?.owner.loginRequester){
			return(
				<button onClick={() => setVisible(!isVisible)} className='advert_button'>Откликнуться</button>
			)
		}
	}

	if (!container) {
		return <div className='notFound'><Spinner /></div>;
	}

	return (
		<div className='advert'>
			<div className='advert_main'>
				<div className='advert_slider'>
					<h2 className='advert_name'>{container.category.name}</h2>
					<Carousel
						showArrows={true}
						infiniteLoop={true}
						showThumbs={false}
						showStatus={false}
						autoPlay={false}
					>
						{container.photos?.map((photo, index) => (
							<div key={index}>
								<img
									src={photo}
									className='advert_image h-auto rounded-lg '
									alt={`photo is ${index}`}
								/>
							</div>
						))}
					</Carousel>
					<div className='advert_info'>
						<div className='advert_info_type'>
							<h3 className='advert_type'>Тип</h3>
							{type(container.type)}
						</div>
						<div className='advert_info_type'>
							<h3 className='advert_type'>Характеристики</h3>
							{type(container.condition)}
						</div>
						<div className='advert_info_type'>
							<h3 className='advert_type'>Марка</h3>
							<p className='advert_sale'>{container.manufacturer.name}</p>
						</div>
						<div className='advert_info_type'>
							<h3 className='advert_type'>Модель</h3>
							<p className='advert_sale'>{container.category.name}</p>
						</div>
						<div className='advert_info_type'>	
							<h3 className='advert_type'>Описание</h3>
							<p className='advert_sale ends'>{container.description}</p>
						</div>
					</div>
				</div>
				<div className='advert_main_info'>
					<h3 className='advert_price'>{container.price}₽</h3>
					{whois()}
					{isVisible && id && (
					<FormSendTrade type={container.type} id={id} />
					)}
					<div className='advert_main_info_owner'>
						<p className='advert_owner'>{container.owner.firstname}</p>
						<img src={profile} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormAdvert;
