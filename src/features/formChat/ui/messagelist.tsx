import React from 'react';
import iconProfile from '../../../shared/svgImage/MyProfile.svg'
import { chatikmessage } from '../type/chat.type';

interface MessageListProps {
  messages: chatikmessage[];
}

export const MessageList: React.FC<MessageListProps> = React.memo(({ messages }) => {
    return (
      <>
        {messages?.map(item => (
          <div key={item.id} className='message-divchik'>
            <div className='messageeptanelez'>
              <img className='norm_fotka' src={iconProfile} alt='' />
              <h4>{item.sender.firstname}</h4>
              <p className='nesosal'>{item.timestamp.substring(11, 16)}</p>
            </div>
            <div className='message-divchik-info'>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </>
    );
  },
  (prevProps, nextProps) => prevProps.messages === nextProps.messages
);