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


export default function ChatWindow({ lgdInUser, allMsgsWOtherUser }) {
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

  allMsgsWOtherUser.sort((a, b) => b.id - a.id);

  if (!otherUser.id) {
    return (
      <div className='messages__container messages__texts-holder'>
        <div>
          <h1 className='messages__title'>No conversation selected</h1>
          <p style={{ textAlign: 'center' }}>
            click a community member to send a message
          </p>
        </div>
      </div>
    );
  }

  return (

    <div className='messages__container messages__texts-holder'>
      <h1 className='messages__title'>
        {otherUser.id ? otherUser.username : 'No Conversation Selected'}
      </h1>
      <div className='messages__texts-and-form'>
        <div className='messages__texts'>
          {otherUser &&
            allMsgsWOtherUser.map((msg) => (
              <div
                className={
                  lgdInUser.id === msg.sender.id
                    ? 'messages__texts__right'
                    : 'messages__texts__left'
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
                  className='single-message-text'
                  title={msg.sender.username}
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
