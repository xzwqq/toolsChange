import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';
import { ChatAction } from '../model/chatslice';
import { chatikmessage, ChatiksProps, namepropiks } from '../type/chat.type';
import iconProfile from '../../../shared/svgImage/iconprofile.svg';
import './formchat.style.scss';
import { LoadingButton } from '../../../widgets/loader/loader';
import { useNavigate } from 'react-router';
import { MessageList } from './messagelist';
import { usePrevious } from '../../../shared/hooks/usePrevious';

export const Chatiks: React.FC<ChatiksProps> = ({ id }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const bottomRef = useRef<HTMLDivElement>(null);
	const messages: chatikmessage[] = useSelector(
		(state: RootState) => state.chat.chat
	);
	const isLoadingButton = useSelector(
		(state: RootState) => state.chat.isbuttonloading
	);
	const name: namepropiks = useSelector((state: RootState) => state.chat.name);
	const [value, setValue] = useState('');
	const prevMessages = usePrevious(messages);

	const postMessage = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(ChatAction.postChatSlice({ chatId: id, text: value }));
		dispatch(ChatAction.getChatSlice(id));
		setValue('');
	};

	useEffect(() => {
		dispatch(ChatAction.getChatSlice(id));
		const intervalId = setInterval(() => {
			dispatch(ChatAction.getChatSlice(id));
		}, 1000);
		return () => clearInterval(intervalId);
	}, [id]);

	useEffect(() => {
    const prevFirst = prevMessages?.[0]?.id;
    const prevLast = prevMessages?.[prevMessages.length - 1]?.id;
    const currentFirst = messages?.[0]?.id;
    const currentLast = messages?.[messages.length - 1]?.id;

    if (prevFirst !== currentFirst || prevLast !== currentLast) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, prevMessages]);

	return (
		<div className='chatiks_main'>
			<div className='info_chatiks'>
				<img src={iconProfile} alt='' />
				<button
					className='dimka-but'
					onClick={() => navigate(`/rating/${name.id}`)}
				>
					{name?.firstname}
				</button>
			</div>
			<span className='line_chatik'></span>
      <div className='message_main'>
			  <MessageList messages={messages} />
			  <div ref={bottomRef} />
      </div>
			<button className='vnizblyat' onClick={() => {bottomRef.current?.scrollIntoView({ behavior: 'smooth' })}}>V</button>
			<form onSubmit={postMessage} className='postmessagepta'>
				<input
					className='input_chatiks'
					value={value}
					onChange={e => setValue(e.target.value)}
					placeholder='Написать...'
					type='text'
				/>
				<LoadingButton
					isLoading={isLoadingButton}
					defaultText='Send'
					type='submit'
					className='but_chatik'
				/>
			</form>
		</div>
	);
};
