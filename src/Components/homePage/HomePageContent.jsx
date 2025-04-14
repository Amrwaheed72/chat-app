import { useEffect, useState } from 'react';
import { UseChatAppContext } from '../../context/chatAppProvider';
import ChatList from './ChatList';
import NoChatSelected from './NoChatSelected';
import Chat from './Chat';

const HomePageContent = () => {
  const { isCheckingAuth, selectedUser, setSelectedUser } = UseChatAppContext();

  useEffect(() => {
    setSelectedUser();
  }, []);
  return (
    <div className="bg-base-200 h-screen rounded-lg">
      <div className="flex justify-end">
        <div className="bg-base-100 h-[calc(100vh-8rem)] w-full rounded-lg shadow-lg">
          <div className="flex h-full overflow-hidden rounded-lg">
            <ChatList />
            {selectedUser ? <Chat /> : <NoChatSelected />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
