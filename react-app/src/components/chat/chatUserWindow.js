//* IMPORTS
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useOtherUserContext } from '../../context/otherUser';
import { getUsers} from '../../store/users';


//*CSS
import './chat.css'


export default function ChatUserWindow({
  allUsers,
  lgdInUser,
}) {

  const dispatch = useDispatch();
  const allChats = useSelector((state) => state.chat);

  const {setOtherUser, otherUser} = useOtherUserContext();


  const chatsArray = Object.values(allChats);
  console.log(chatsArray)
  const allChatsForUser = chatsArray.filter(
    (message) =>
      message.senderid === lgdInUser.id || message.receiverid === lgdInUser.id
  );
  console.log(allChatsForUser)
  

  // chat history -> (only see user history 1 time)
  const set = new Set();
  const previousChatArr = [];
  console.log(allChatsForUser)

  for (let i = allChatsForUser.length - 1; i >= 0; i--) {
    let msg = allChatsForUser[i];
    const idToAdd =
      msg.senderid === lgdInUser.id ? msg.receiverid : msg.senderid;
    if (!set.has(idToAdd)) previousChatArr.push(idToAdd);
    set.add(idToAdd);
  }
console.log(previousChatArr)
  const chatUsers = [];
  previousChatArr.forEach((id) => chatUsers.push(allUsers[id]));
  console.log(chatUsers)
  if (chatUsers.length === 0) chatUsers.push({ firstname: 'No message history' });

  return (
    <>
      {chatUsers.length > 0 && !!chatUsers[0] && (
        <div className='chat__container chat__users-holder'>
          <h3 className='chat__title'>CONVERSATIONS</h3>
          <hr/>
          {chatUsers.map((user) => {
            console.log(user)
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
                  console.log(otherUser)
                }}
              >
                <div style={{display:"flex", alignItems:"center"}}>
                <img src={user.imgurl} style={{width:"45%", padding:"1rem"}}/>
                {user.firstname}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
