import { UseChatAppContext } from '../../context/chatAppProvider';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessagesSekelton from '../skeletons/MessagesSekelton';

const Chat = () => {
  const { selectedUser, setSelectedUser, isUserLoading, isMessagesLoading } =
    UseChatAppContext();
  // useEffect(()=>{
  //     getMessage(selectedUser.id)
  // },[])
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <ChatHeader />
      {isMessagesLoading && <MessagesSekelton />}
      <p>Messages....</p>
      <MessageInput />
    </div>
  );
};

export default Chat;
