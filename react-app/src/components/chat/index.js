//* IMPORTS
import React, {createContext, useContext, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* USED COMPONENTS
import ChatUserWindow from './chatUserWindow';
import ChatWindow from './chatWindow';
import ChatForm from './chatForm';
//* REDUX THUNK
import { getChats } from '../../store/chat';

//*CSS
import './chat.css'
import CenterCard from '../centerCard/centerCard';

// @param otherUser will be selected user at click (to be receiver)
const OtherUserContext = createContext();
export const useOtherUserContext = () => useContext(OtherUserContext);

//*STORE 
export default function Chats() {
  const lgdInUser = useSelector((state) => state.session.user);
  const allChats = useSelector((state) => state.chat);
  const allUsers = useSelector((state) => state.users);
  
  const dispatch = useDispatch();

//* STATE FOR CONTEXT
  const [otherUser, setOtherUser] = useState({ id: null });

    useEffect(() => {
    // dispatch(getChats());
  }, [dispatch]);
  
  const chatsArray = Object.values(allChats);
  const allChatsForUser = chatsArray.filter(
    (message) =>
      message.senderId === lgdInUser.id || message.receiverId === lgdInUser.id
  );

  const allChatsWOtherUser = allChatsForUser.filter((message) => {
    const idToCheck = otherUser.id;
    return message.senderId === idToCheck || message.receiverId === idToCheck;
  });

  return (
    <div>
      <CenterCard>
    <div style={{padding:"1rem"}}>
      {allUsers && lgdInUser && allChatsForUser && allChatsWOtherUser && (
        <OtherUserContext.Provider value={{ otherUser, setOtherUser }}>
          <div className='messages'>
            <ChatWindow
              lgdInUser={lgdInUser}
              allChatsWOtherUser={allChatsWOtherUser}
            />
            <ChatForm/>
          </div>
        </OtherUserContext.Provider>
      )}
    </div>
    </CenterCard>
    </div>
  );
}