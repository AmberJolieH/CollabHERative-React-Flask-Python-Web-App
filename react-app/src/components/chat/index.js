//* IMPORTS
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* USED COMPONENTS
import ChatWindow from './chatWindow';
import ChatForm from './chatForm';
//* REDUX THUNK
import { getUsers } from '../../store/users';
import {getMessages} from "../../store/chat"
import {useOtherUserContext} from "../../context/otherUser"
//*CSS
import './chat.css'
import CenterCard from '../centerCard/centerCard';

// @param otherUser will be selected user at click (to be receiver)


//*STORE 
export default function Chats() {
  const lgdInUser = useSelector((state) => state.session.user);
  const allChats = useSelector((state) => state.chat);
  const allUsers = useSelector((state) => state.users);
  const {otherUser} = useOtherUserContext();
  const dispatch = useDispatch();

//* STATE FOR CONTEXT
  

    useEffect(() => {
    dispatch(getUsers());
    dispatch(getMessages());
  }, [dispatch]);


  
  const chatsArray = Object.values(allChats);
  console.log(chatsArray)
  const allChatsForUser = chatsArray.filter(
    (message) =>
      message.senderId === lgdInUser.id || message.receiverId === lgdInUser.id
  );
console.log(allChatsForUser)

  const allChatsWOtherUser = allChatsForUser.filter((message) => {
    const idToCheck = otherUser.id;
    return message.senderId === idToCheck || message.receiverId === idToCheck;
  });
  
  return (
    <div>
      <CenterCard>
    <div style={{padding:"1rem"}}>
      {allUsers && lgdInUser && allChatsForUser && allChatsWOtherUser && (
      <div>
        <div>
            <ChatWindow
              lgdInUser={lgdInUser}
              allChatsWOtherUser={allChatsWOtherUser}
            />
        </div>
      </div>
      )}
    </div>
    </CenterCard>
    </div>
  );
}