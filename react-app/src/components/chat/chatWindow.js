//* IMPORTS 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CenterCard from '../centerCard/centerCard';

//* CONTEXT
import { useOtherUserContext } from '../../context/otherUser';

//* FORM
import ChatForm from './chatForm';

//* REDUX
import { deleteMessage } from '../../store/chat';

//*CSS
import './chat.css'

export default function ChatWindow({ lgdInUser }) {
  const { otherUser } = useOtherUserContext();
  const dispatch = useDispatch();
  const allChats = useSelector((state) => state.chat);


  const chatsArray = Object.values(allChats);
  console.log(chatsArray)
  const allChatsForUser = chatsArray.filter(
    (message) =>
      message.senderid === lgdInUser.id || message.receiverid === lgdInUser.id
  );
console.log(allChatsForUser)

  const allChatsWOtherUser = allChatsForUser.filter((message) => {
    const idToCheck = otherUser.id;
    return message.senderid === idToCheck || message.receiverid === idToCheck;
  });

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
  console.log(allChatsWOtherUser)
  
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
                  lgdInUser.id === msg.senderid
                    ? 'chat__texts__right'
                    : 'chat__texts__left'
                }
                key={msg.id}
              >
                <p
                  style={
                    lgdInUser.id === msg.senderid
                      ? {
                          background: 'rgba(13, 51, 223, 0.65)',
                        }
                      : {}
                  }
                  className='single-chat-text'
                  title={msg.sender.firstname}
                  onClick={lgdInUser.id === msg.senderid ? () => handleDelete(msg) : undefined}
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
