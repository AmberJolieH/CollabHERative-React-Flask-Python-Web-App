//* IMPORTS
import React, {createContext, useContext, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* USED COMPONENTS
import ChatUserWindow from './chatUserWindow';
//* REDUX THUNK
import { getMessages } from '../../store/chat';

//*CSS
import './chat.css'
import RightNav from '../rightNav/rightNav'

// @param otherUser will be selected user at click (to be receiver)
const OtherUserContext1 = createContext();
export const useOtherUserContext1 = () => useContext(OtherUserContext1);

//*STORE 
export default function Chat() {
  const lgdInUser = useSelector((state) => state.session.user);
  const allChats = useSelector((state) => state.chat);
  const allUsers = useSelector((state) => state.users);
  
  const dispatch = useDispatch();

//* STATE FOR CONTEXT
  const [otherUser, setOtherUser] = useState({ id: null });

    useEffect(() => {

  }, [dispatch]);
  
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
        <OtherUserContext1.Provider value={{ otherUser, setOtherUser }}>
          <div className='chat'>
            <ChatUserWindow
              allUsers={allUsers}
              lgdInUser={lgdInUser}
              allChatsForUser={allChatsForUser}
            />
          </div>
        </OtherUserContext1.Provider>
      )}
    </div>
    </RightNav>
    </div>
  );
}