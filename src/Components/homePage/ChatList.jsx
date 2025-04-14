import { BiUser } from 'react-icons/bi';
import { UseChatAppContext } from '../../context/chatAppProvider';
import ChatListSkeleton from '../skeletons/ChatListSekeleton';
import users from './data';

const ChatList = () => {
  const { selectedUser, setSelectedUser, isUserLoading } = UseChatAppContext();

  if (isUserLoading) return <ChatListSkeleton />;

  return (
    <aside className="border-base-300 flex h-full w-20 flex-col border-r transition-all duration-200 md:w-72">
      <div className="border-base-300 w-full border-b p-5">
        <div className="flex items-center gap-2">
          <BiUser className="h-6 w-6" />
          <span className="fontino hidden font-medium md:block">Contacts</span>
        </div>
        {/* online filter toggle */}
      </div>
      <div className="w-full overflow-y-auto py-3">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`hover:bg-base-300 flex w-full items-center gap-3 p-3 transition-colors ${selectedUser?.id === user.id ? 'bg-base-300 ring-base-300 ring-1' : ''}`}
          >
            <div className="relative mx-auto lg:mx-0">
              {/* will be pic */}
              <div
                // src={user.profilePic}
                // alt={user.name}
                className="size-12 rounded-full object-cover"
              >
                {user.profilePic}
              </div>
              {/* online users */}
              {/* {onlineUsers.includes(user.id)&&(
                <span className='absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900' />
              )} */}
            </div>
            {/* userinfo */}
            <div className='hidden lg:block'></div>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default ChatList;
