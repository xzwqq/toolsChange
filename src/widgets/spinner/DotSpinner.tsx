import './LoadingText.scss';

export const LoadingText = () => {
	return (
		<div className={`loading-button`}>
			<span className='loading-dots'>
				<span className='dot'></span>
				<span className='dot'></span>
				<span className='dot'></span>
			</span>
		</div>
	);
};
