import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { UseChatAppContext } from '../context/chatAppProvider';

const AppLayout = () => {
  const { authUser } = UseChatAppContext();
  return (
    <div>
      <Navbar />
      {authUser ? <Sidebar /> : null}
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
