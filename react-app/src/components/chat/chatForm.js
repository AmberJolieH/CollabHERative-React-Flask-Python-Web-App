//* IMPORTS 
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage } from '../../store/chat';
import { useOtherUserContext } from './index';
import './chat.css'

//* CHAT INPUT FORM
export default function ChatForm() {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('');

  const { otherUser } = useOtherUserContext();
  const lgdInUserId = useSelector((state) => state.session.user.id);

  const onSend = async function (e) {
    e.preventDefault();
    const msgOrErrors = await dispatch(
      createMessage({
        senderId: lgdInUserId,
        receiverId: otherUser.id,
        message: msg,
      })
    );
    if (!msgOrErrors.errors) {
      setMsg('');
    }
  };

  return (
    <form onSubmit={onSend} className='chat-form'>
      <textarea style={{width:"26rem", display:"flex", alignItems:"center"}}
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        className='chat-form__input'
        maxLength={500}
        rows={3}
        required
      />
      <button type='submit' className='chat-form__button'> Send
        <i className='fas fa-play fa-2x'></i>
      </button>
    </form>
  );
}
