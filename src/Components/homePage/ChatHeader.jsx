import { UseChatAppContext } from '../../context/chatAppProvider';

const ChatHeader = () => {
  const { selectedUser, setSelectedUser, isUserLoading } = UseChatAppContext();
  return (
    <div className="border-base-300 border-b p-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* avatar */}
          <div className="avatar">
            <div className="relative size-10 rounded-full">
              <div>{selectedUser.profilePic}</div>
              {/* <img src={selectedUser.profilePic} alt="hi" /> */}
            </div>
          </div>
          {/* continue from hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
          <div className="font-medium">{selectedUser.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
