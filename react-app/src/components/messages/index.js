//* IMPORTS
import {createContext, useContext, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* USED COMPONENTS
import MessageUsersHolder from './MessageUsersHolder';
import MessageTextsHolder from './MessageTextsHolder';

//* REDUX THUNK
import { getMessages } from '../../store/chat';

//*CSS
import './chat.css'

// @param otherUser will be selected user at click (to be receiver)
const OtherUserContext = createContext();
export const useOtherUserContext = () => useContext(OtherUserContext);

//*STORE 
export default function Messages() {
  const lgdInUser = useSelector((state) => state.session.user);
  const allMsgs = useSelector((state) => state.messages);
  const allUsers = useSelector((state) => state.users);
  
  const dispatch = useDispatch();
//* CONTEXT
  const [otherUser, setOtherUser] = useState({ id: null });

    useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  
  const msgsArray = Object.values(allMsgs);
  const allMsgsLgdInUser = msgsArray.filter(
    (message) =>
      message.senderId === lgdInUser.id || message.receiverId === lgdInUser.id
  );

  const allMsgsWOtherUser = allMsgsLgdInUser.filter((message) => {
    const idToCheck = otherUser.id;
    return message.senderId === idToCheck || message.receiverId === idToCheck;
  });

  return (
    <>
      {allUsers && lgdInUser && allMsgsLgdInUser && allMsgsWOtherUser && (
        <OtherUserContext.Provider value={{ otherUser, setOtherUser }}>
          <div className='messages'>
            <MessageUsersHolder
              allUsers={allUsers}
              lgdInUser={lgdInUser}
              allMsgsLgdInUser={allMsgsLgdInUser}
            />
            <MessageTextsHolder
              lgdInUser={lgdInUser}
              allMsgsWOtherUser={allMsgsWOtherUser}
            />
          </div>
        </OtherUserContext.Provider>
      )}
    </>
  );
}