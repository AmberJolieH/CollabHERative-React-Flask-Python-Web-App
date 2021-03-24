//* IMPORTS 
import React from 'react';
import { useDispatch } from 'react-redux';
import CenterCard from '../centerCard/centerCard';

//* CONTEXT
import { useOtherUserContext } from './index';

//* FORM
import ChatForm from './chatForm';

//* REDUX
import { deleteMessage } from '../../store/chat';

//*CSS
import './chat.css'

export default function ChatWindow({ lgdInUser, allChatsWOtherUser }) {
  const { otherUser } = useOtherUserContext();
  const dispatch = useDispatch();

  const handleDelete = function (msg) {
    const res = window.confirm(`Delete this message? "${msg.message}"`);
    if (res) dispatch(deleteMessage(msg.id));
  };

  const formatDate = function (dateString) {
    let amPm = 'am';
    const date = new Date(dateString);
    let hours = date.getHours();
    if (hours >= 12) amPm = 'pm';
    if (hours > 12) hours -= 12;
    date.setHours(hours);
    const day = date.toDateString();
    const time = date.toTimeString().slice(0, 5);
    return `${day}, ${time} ${amPm}`;
  };

  
  if (!otherUser.id) {
    return (
      <div className='chat__container chat__texts-holder'>
        <div>
          <h1 className='chat__title'>No conversation selected</h1>
          <p style={{ textAlign: 'center' }}>
            click a community member to send a message
          </p>
        </div>
      </div>
    );
  }
  
  allChatsWOtherUser.sort((a, b) => b.id - a.id);
  
  return (

    <div className='chat__container chat__texts-holder'>
      <h1 className='chat__title'>
        {otherUser.id ? otherUser.firstname : 'No Conversation Selected'}
      </h1>
      <div className='chat__texts-and-form'>
        <div className='chat__texts'>
          {otherUser &&
            allChatsWOtherUser.map((msg) => (
              <div
                className={
                  lgdInUser.id === msg.sender.id
                    ? 'chat__texts__right'
                    : 'chat__texts__left'
                }
                key={msg.id}
              >
                <p
                  style={
                    lgdInUser.id === msg.sender.id
                      ? {
                          background: 'rgba(13, 51, 223, 0.65)',
                        }
                      : {}
                  }
                  className='single-chat-text'
                  title={msg.sender.firstname}
                  onClick={lgdInUser.id === msg.sender.id ? () => handleDelete(msg) : undefined}
                >
                  {msg.message}
                </p>
                <p className='timestamp'>{formatDate(msg.timestamp)}</p>
              </div>
            ))}
        </div>
        <ChatForm />
      </div>
    </div>
  );
}
