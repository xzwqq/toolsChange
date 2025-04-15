import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';
import { AdvertActions } from '../model/advertSlice';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './formadvert.scss'


const FormAdvert: React.FC = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const container = useSelector((state: RootState) => state.advert.container);

	useEffect(() => {
		dispatch(AdvertActions.submitAdvert(id));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
    const type = (cont:string) =>{
        if(cont === 'SALE'){
            return(
            <p className='advert_sale'>Продажа</p>
        )
        }
        if(cont === 'RENT'){
            return(
                <p className='advert_sale'>Аренда</p>
            )
            }

        if(cont === 'NEW'){
            return(
                <p className='advert_sale'>Новый</p>
            )
        }
        if(cont === ''){
            return(
                <p className='advert_sale'>Б/у</p>
            )
        }
    }

	if (!container) {
		return <div>Объявление не найдено</div>; 
	}

	return (
		<div className='advert'>
                <div className="advert_main">
                    <div className="advert_slider">
                    <h2 className='advert_name'>{container.category.name}</h2>
                        <Swiper modules={[Navigation, Pagination]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    loop
                                >
                            {container.photos?.map((photo, index)=>(
                                <SwiperSlide key={index}>
                                <img src={photo} className="advert_image h-auto rounded-lg " alt="asd" />
                                </SwiperSlide>
                            ))}
                            </Swiper>
                            <div className="advert_info">
                        <div className="advert_info_type">
                            <h3 className='advert_type'>Тип</h3>
                            {type(container.type)}
                        </div>
                        <div className="advert_info_type">
                            <h3 className='advert_type'>Характеристики</h3>
                            {type(container.condition)}
                        </div>
                        <div className="advert_info_type">
                            <h3 className='advert_type'>Марка</h3>
                            <p className='advert_sale'>{container.manufacturer.name}</p>
                        </div>
                        <div className="advert_info_type">
                            <h3 className='advert_type'>Модель</h3>
                            <p className='advert_sale'>{container.category.name}</p>
                        </div>
                        <div className="advert_info_type">
                            <h3 className='advert_type'>Описание</h3>
                            <p className='advert_sale ends'>{container.description}</p> 
                        </div>
                    </div>
                    </div>
                    <div className="advert_main_info">
                        <h3 className='advert_price'>{container.price}₽</h3>
                        <button className='advert_button'>Откликнуться</button>
                        <div className="advert_main_info_owner">
                            <p className='advert_owner'>{container.owner.firstname}</p>
                            <img src="/public/svgImage/MyProfile.svg" alt="" />
                        </div>
                    </div>
                </div>       
                
		</div>
	);
};

export default FormAdvert;
