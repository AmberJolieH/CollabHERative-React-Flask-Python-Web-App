//* IMPORTS
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* USED COMPONENTS
import ChatUserWindow from './chatUserWindow';
//* REDUX THUNK
import { getChat } from '../../store/chat';

import {useOtherUserContext} from "../../context/otherUser"

//*CSS
import './chat.css'
import RightNav from '../rightNav/rightNav'

// @param otherUser will be selected user at click (to be receiver)

//!hooks
export default function Chat() {
  const lgdInUser = useSelector((state) => state.session.user);
  const allChats = useSelector((state) => state.chat);
  const allUsers = useSelector((state) => state.users);
  const {otherUser} = useOtherUserContext();

  const chatsArray = Object.values(allChats);
  const allChatsForUser = chatsArray.filter(
    (chat) =>
      chat.senderId === lgdInUser.id || chat.receiverId === lgdInUser.id
  );

  const allChatsWOtherUser = allChatsForUser.filter((chat) => {
    const idToCheck = otherUser.id;
    return chat.senderId === idToCheck || chat.receiverId === idToCheck;
  });

  return (
    <div>
      <RightNav>
    <div>
      {allUsers && lgdInUser && allChatsForUser && allChatsWOtherUser && (
          <div className='chat'>
            <ChatUserWindow
              allUsers={allUsers}
              lgdInUser={lgdInUser}
              allChatsForUser={allChatsForUser}
            />
          </div>
      )}
    </div>
    </RightNav>
    </div>
  );
}