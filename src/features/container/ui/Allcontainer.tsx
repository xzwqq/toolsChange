import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { content } from '../type/container_type.ts';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';

interface MyContainerProps {
	data: Array<content>;
}

const Allscontainer = ({ data }: MyContainerProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = localStorage.getItem('token')
	return (
		<div className='root_container'>
			<div className='container'>
				{data?.map((content: content) => {
					return (
						<div
							key={content.id}
							onClick={() => {
								if(token){
									navigate(`/advert/${content.id}`)
								}else{
									dispatch(HelperActions.setErrorNetwork('Зарегестрируйтесь перед тем как заходить в обьявления!'))
								}
							}}
							className='container_item'
						>
							<Carousel
								showArrows={true}
								infiniteLoop={true}
								showThumbs={false}
								showStatus={false}
								autoPlay={false}
								renderArrowPrev={(clickHandler, hasPrev, label) =>
									hasPrev && (
										<button
											className='carousel-arrow carousel-arrow-left'
											onClick={e => {
												e.stopPropagation();
												clickHandler();
											}}
											aria-label={label}
										>
											❮
										</button>
									)
								}
								renderArrowNext={(clickHandler, hasNext, label) =>
									hasNext && (
										<button
											className='carousel-arrow carousel-arrow-right'
											onClick={e => {
												e.stopPropagation();
												clickHandler();
											}}
											aria-label={label}
										>
											❯
										</button>
									)
								}
							>
								{content.photos?.map((photo, index) => (
									<div key={index}>
										<img
											src={photo}
											className='container_img'
											alt={`photo ${index}`}
										/>
									</div>
								))}
							</Carousel>
							<h2 className='container_text'>{content.category.name}</h2>
							<h2 className='container_text'>{content.price} ₽</h2>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Allscontainer;
