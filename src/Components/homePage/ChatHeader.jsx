import { FaXmark } from 'react-icons/fa6';
import { UseChatAppContext } from '../../context/chatAppProvider';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const ChatHeader = () => {
  const { selectedUser, setSelectedUser, isUserLoading } = UseChatAppContext();
  const [data, setData] = useState(selectedUser);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
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
            {selectedUser.status === 'online' ? (
              <div className="absolute right-0 bottom-0 size-3 rounded-full bg-green-500" />
            ) : null}
          </div>
          {/* user info */}
          <div className="font-medium">{selectedUser.name}</div>
          {/* <p className='text-sm text-base-content/70'>
          {onlineUsers.includes(selectedUser._id)? "Online":"offline"}
          </p> */}
        </div>
        {/* close button */}
        <div className="flex items-center justify-between gap-2">
          {show ? (
            <input
              type="text"
              className="input input-bordered fontino focus:outline-none"
              placeholder="search messages..."
            />
          ) : null}
          <div
            className="hover:bg-base-300 hover rounded-md p-2 transition-all duration-300 active:scale-90"
            title="search messages"
          >
            <FaSearch
              onClick={() => setShow((prev) => !prev)}
              size={24}
              className="cursor-pointer"
            />
          </div>
          <button
            title="close chat"
            className="hover:bg-base-300 rounded-md p-2 transition-all duration-300 hover:cursor-pointer active:scale-90"
            onClick={() => {
              setSelectedUser(null);
            }}
          >
            <FaXmark size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
