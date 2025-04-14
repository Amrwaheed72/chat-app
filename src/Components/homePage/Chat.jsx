import { useEffect } from 'react';
import { UseChatAppContext } from '../../context/chatAppProvider';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';

const Chat = () => {
  const { selectedUser, setSelectedUser, isUserLoading } = UseChatAppContext();
  // useEffect(()=>{
  //     getMessage(selectedUser.id)
  // },[])
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <ChatHeader />
      <p>Messages....</p>
      <MessageInput />
    </div>
  );
};

export default Chat;
