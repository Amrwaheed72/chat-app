import { BiSearch, BiUser } from 'react-icons/bi';
import { UseChatAppContext } from '../../context/chatAppProvider';
import ChatListSkeleton from '../skeletons/ChatListSekeleton';
import users from './data';
import { useState } from 'react';

const ChatList = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const [data, setData] = useState(users);
  const { selectedUser, setSelectedUser, isUserLoading } = UseChatAppContext();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);

    if (!query) {
      setData(users);
      return;
    }

    const filteredData = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.id.toString().includes(query),
    );
    setData(filteredData);
  };

  const handleShow = () => {
    setShow((prev) => !prev);
  };
  if (isUserLoading) return <ChatListSkeleton />;

  return (
    <aside className="border-base-300 flex h-full w-20 flex-col border-r transition-all duration-200 md:w-96">
      <div className="border-base-300 relative flex w-full flex-col gap-4 border-b p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-2">
            <BiUser className="h-6 w-6" />
            <span className="fontino hidden font-medium md:block">
              Contacts
            </span>
          </div>
          <div
            onClick={handleShow}
            className="flex w-6 cursor-pointer items-center justify-center"
            title="search"
          >
            <BiSearch size={20} />
          </div>
        </div>
        {show && (
          <input
            value={search}
            onChange={handleSearch}
            className="border-base fontino top-5 rounded-xl border pl-4 focus:outline-none"
            type="search"
            placeholder="search chats....."
          />
        )}
        {/* online filter toggle */}
      </div>
      <div className="w-full overflow-y-auto py-3">
        {data.map((user) => (
          <button
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`hover:bg-base-300 flex w-full items-center gap-1 p-3 transition-colors ${selectedUser?.id === user.id ? 'bg-base-300 ring-base-300 ring-1' : ''}`}
          >
            <div className="relative mx-auto md:mx-0">
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
            <div className="hidden min-w-0 text-left md:block">
              <div className="fontino truncate font-medium">{user.name}</div>
              <div className="text-sm text-zinc-400">{user.status}</div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default ChatList;
