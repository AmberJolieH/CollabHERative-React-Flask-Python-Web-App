//* IMPORTS
import React from 'react';
import { useOtherUserContext1 } from './secondChatCard';

//*CSS
import './chat.css'


export default function ChatUserWindow({
  allUsers,
  lgdInUser,
  allMessagesForUser,
}) {
  const {setOtherUser, otherUser} = useOtherUserContext1();

  // chat history -> (only see user history 1 time)
  const set = new Set();
  const previousChatArr = [];

  for (let i = allMessagesForUser.length - 1; i > 0; i--) {
    let msg = allMessagesForUser[i];
    const idToAdd =
      msg.senderId === lgdInUser.id ? msg.receiverId : msg.senderId;
    if (!set.has(idToAdd)) previousChatArr.push(idToAdd);
    set.add(idToAdd);
  }

  const chatUsers = [];
  previousChatArr.forEach((id) => chatUsers.push(allUsers[id]));
  if (chatUsers.length === 0) chatUsers.push({ username: 'No message history' });

  return (
    <>
      {chatUsers.length > 0 && !!chatUsers[0] && (
        <div className='messages__container messages__users-holder'>
          <h1 className='messages__title'>Chats</h1>
          {chatUsers.map((user) => {
            return (
              <div
                className={
                  user.username === 'No message history'
                    ? 'messages__no-msg-history'
                    : user.id === otherUser.id
                    ? 'messages__other-user messages__other-user-active'
                    : 'messages__other-user'
                }
                key={user.id}
                onClick={() => {
                  setOtherUser(user);
                }}
              >
                {user.username}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
