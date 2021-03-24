//* IMPORTS
import React, {createContext, useContext, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* USED COMPONENTS
import ChatUserWindow from './chatUserWindow';
import ChatWindow from './chatWindow';
import ChatForm from './chatForm';
//* REDUX THUNK
import { getMessages } from '../../store/chat';

//*CSS
import './chat.css'
import CenterCard from '../centerCard/centerCard';
import RightNav from '../rightNav/rightNav'
// @param otherUser will be selected user at click (to be receiver)
const OtherUserContext1 = createContext();
export const useOtherUserContext1 = () => useContext(OtherUserContext1);

//*STORE 
export default function Messages() {
  const lgdInUser = useSelector((state) => state.session.user);
  const allMessages = useSelector((state) => state.chat);
  const allUsers = useSelector((state) => state.users);
  
  const dispatch = useDispatch();

//* STATE FOR CONTEXT
  const [otherUser, setOtherUser] = useState({ id: null });

    useEffect(() => {
    // dispatch(getMessages());
  }, [dispatch]);
  
  const messagesArray = Object.values(allMessages);
  const allMessagesForUser = messagesArray.filter(
    (message) =>
      message.senderId === lgdInUser.id || message.receiverId === lgdInUser.id
  );

  const allMessagesWOtherUser = allMessagesForUser.filter((message) => {
    const idToCheck = otherUser.id;
    return message.senderId === idToCheck || message.receiverId === idToCheck;
  });

  return (
    <div>
      <RightNav>
    <div>
      {allUsers && lgdInUser && allMessagesForUser && allMessagesWOtherUser && (
        <OtherUserContext1.Provider value={{ otherUser, setOtherUser }}>
          <div className='messages'>
            <ChatUserWindow
              allUsers={allUsers}
              lgdInUser={lgdInUser}
              allMessagesForUser={allMessagesForUser}
            />
          </div>
        </OtherUserContext1.Provider>
      )}
    </div>
    </RightNav>
    </div>
  );
}