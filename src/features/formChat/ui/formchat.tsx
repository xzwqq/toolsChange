import React, { useEffect } from 'react';
import './formchat.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ChatAction } from '../model/chatslice';
import { useNavigate, useParams } from 'react-router';
import { RootState } from '../../../app/store/store';
import { queueChat } from '../type/chat.type';
import iconProfile from '../../../shared/svgImage/iconprofile.svg';
import { Chatiks } from './chatiks';
import { LoadingText } from '../../../widgets/spinner/DotSpinner';

const Formchat: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const queueMap: Array<queueChat> = useSelector(
		(state: RootState) => state.chat.queue
	);
	const isLoading: boolean = useSelector(
		(state: RootState) => state.chat.isLoading
	);

	useEffect(() => {
		dispatch(ChatAction.getQueueSlice());
		const intervalId = setInterval(() => {
			dispatch(ChatAction.getQueueSlice());
		}, 2000);
		return () => clearInterval(intervalId);
	}, []);
	if(isLoading){
			return(
				<div className='not-gound-conatn'>
					<LoadingText />
				</div>
			)
		}

	return (
		<div className='root_chat'>
			<div className='info_chat'>
				<h1 className='chat_main_h'>Сообщения</h1>
				<div className='chat_main'>
					<div className='taknado'>
						{!queueMap.length ? (<p className='netuchatov'>Еще нету чатов...</p>) : ('')}
						{queueMap?.map(item => {
							return (
								<div
									className={
										item.id.toString() === id
											? `info_pspsp yaebal`
											: `info_pspsp`
									}
									key={item.id}
									onClick={() => navigate(`/chat/${item.id}`)}
								>
									<img className='icon_chat' src={iconProfile} alt='icon' />
									<div className='info_queue'>
										<p className='info_queue_p'>{item.user.firstname}</p>
										<p className='info_queue_ps'>{item.lastMessage}</p>
									</div>
								</div>
							);
						})}
					</div>
					{id && <Chatiks id={id} />}
				</div>
			</div>
		</div>
	);
};

export default Formchat;
