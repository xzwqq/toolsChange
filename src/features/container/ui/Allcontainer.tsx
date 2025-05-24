import { history } from '../../../app/providers/history.ts';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { content } from '../type/container_type.ts';

interface MyContainerProps {
	data: Array<content>;
}

const Allscontainer = ({ data }: MyContainerProps) => {
	return (
		<div className='root_container'>
			<div className='container'>
				{data?.map((content: content) => {
					return (
						<div
							key={content.id}
							onClick={() => history.push(`/advert/${content.id}`)}
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
