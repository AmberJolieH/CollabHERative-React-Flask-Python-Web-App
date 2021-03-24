//* IMPORTS
import React from 'react';
import { useOtherUserContext1 } from './secondChatCard';

//*CSS
import './chat.css'


export default function ChatUserWindow({
  allUsers,
  lgdInUser,
  allChatsForUser,
}) {
  const {setOtherUser, otherUser} = useOtherUserContext1();

  // chat history -> (only see user history 1 time)
  const set = new Set();
  const previousChatArr = [];

  for (let i = allChatsForUser.length - 1; i > 0; i--) {
    let msg = allChatsForUser[i];
    const idToAdd =
      msg.senderId === lgdInUser.id ? msg.receiverId : msg.senderId;
    if (!set.has(idToAdd)) previousChatArr.push(idToAdd);
    set.add(idToAdd);
  }

  const chatUsers = [];
  previousChatArr.forEach((id) => chatUsers.push(allUsers[id]));
  if (chatUsers.length === 0) chatUsers.push({ firstname: 'No message history' });

  return (
    <>
      {chatUsers.length > 0 && !!chatUsers[0] && (
        <div className='chat__container chat__users-holder'>
          <h1 className='chat__title'>Chats</h1>
          {chatUsers.map((user) => {
            return (
              <div
                className={
                  user.firstname === 'No chat history'
                    ? 'chat__no-msg-history'
                    : user.id === otherUser.id
                    ? 'chat__other-user chat__other-user-active'
                    : 'chat__other-user'
                }
                key={user.id}
                onClick={() => {
                  setOtherUser(user);
                }}
              >
                {user.firstname}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
