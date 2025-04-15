import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { UseChatAppContext } from '../context/chatAppProvider';

const AppLayout = () => {
  const { authUser, fullWidth } = UseChatAppContext();
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {/* {authUser && <Sidebar />} */}
        <Sidebar />
        {/* Main content area */}
        <main className={`flex-1 overflow-y-auto ${fullWidth ? 'ml-12' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
