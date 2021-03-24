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

// @param otherUser will be selected user at click (to be receiver)
const OtherUserContext = createContext();
export const useOtherUserContext = () => useContext(OtherUserContext);

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
      <CenterCard>
    <div>
      {allUsers && lgdInUser && allMessagesForUser && allMessagesWOtherUser && (
        <OtherUserContext.Provider value={{ otherUser, setOtherUser }}>
          <div className='messages'>
            <ChatWindow
              lgdInUser={lgdInUser}
              allMessagesWOtherUser={allMessagesWOtherUser}
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