import { BiSearch, BiUser } from 'react-icons/bi';
import { UseChatAppContext } from '../../context/chatAppProvider';
import ChatListSkeleton from '../skeletons/ChatListSekeleton';
import users from './data';
import { useState } from 'react';
import { RiCheckDoubleLine } from 'react-icons/ri';
import { HiDotsVertical } from 'react-icons/hi';
import FilterContent from '../../ui/FilterContent';
import {
  LuMessageCircleDashed,
  LuUserRound,
  LuUserRoundX,
  LuUsers,
} from 'react-icons/lu';
import { CiHeart } from 'react-icons/ci';
import { GoPencil } from 'react-icons/go';

const ChatList = () => {
  const [showList, setShowList] = useState(false);
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
        user.id.toString().includes(query) ||
        user.lastMessage.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
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
          <div className="relative flex items-center justify-center gap-2">
            <div
              onClick={() => {
                setShowList(false);
                setShow((prev) => !prev);
              }}
              className="hover:bg-base-300 flex cursor-pointer items-center justify-center rounded-md p-1 transition-all duration-300 active:scale-90"
              title="search"
            >
              <BiSearch size={20} />
            </div>
            <div
              onClick={() => {
                setShow(false);
                setShowList((prev) => !prev);
              }}
              className="hover:bg-base-300 flex cursor-pointer items-center justify-center rounded-md p-1 transition-all duration-300 active:scale-90"
              title="search"
            >
              <HiDotsVertical size={20} />
            </div>
            {showList ? (
              <div className="bg-base-200 border-base-300 absolute top-10 right-[-6rem] flex w-40 flex-col gap-2 border p-1">
                <p className="text-accent/70 font-bold">filter by :</p>
                <FilterContent icon={<LuMessageCircleDashed />} text="Unread" />
                <FilterContent icon={<CiHeart size={20} />} text="Favorites" />
                <FilterContent icon={<LuUserRound />} text="Contacts" />
                <FilterContent icon={<LuUserRoundX />} text="Non-contacts" />
                <FilterContent icon={<LuUsers />} text="Groups" />
                <FilterContent icon={<GoPencil />} text="Drafts" />
              </div>
            ) : null}
          </div>
        </div>
        {show && (
          <input
            value={search}
            onChange={handleSearch}
            className="input input-bordered fontino mb-2 pl-4 focus:outline-none"
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
              {user.status === 'online' ? (
                <div className="absolute right-2.5 bottom-2 size-3 rounded-full bg-green-500" />
              ) : null}

              {/* online users */}
              {/* {onlineUsers.includes(user.id)&&(
                <span className='absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900' />
              )} */}
            </div>
            {/* userinfo */}
            <div className="hidden min-w-0 text-left md:block">
              <div className="fontino truncate font-medium">{user.name}</div>
              <div className="flex items-center justify-center gap-1">
                <RiCheckDoubleLine />
                <div className="text-sm text-zinc-400">{user.lastMessage}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default ChatList;
