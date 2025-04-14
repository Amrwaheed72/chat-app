import { IoIosLogOut } from 'react-icons/io';
import { UseChatAppContext } from '../context/chatAppProvider';
import ChatLogo from './ChatLogo';
import { useNavigate } from 'react-router-dom';
import FunctionalIcon from './FunctionalIcon';
import { MdOutlineLightMode } from 'react-icons/md';

const Navbar = () => {
  const { authUser, theme, setTheme } = UseChatAppContext();
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (authUser) {
      navigate('/');
    }
  };

  return (
    <div className="bg-base-200 border-accent-content w-full border-b px-10 py-[15px]">
      <div className="flex items-center justify-between">
        <div
          onClick={handleNavigate}
          className="flex cursor-pointer items-center justify-center gap-4"
        >
          <ChatLogo />
          <p className="fontino text-2xl font-bold">Btngan</p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="bg-accent-content/10 active:bg-accent-content/20 rounded-xl p-1 px-2 transition-all duration-500">
            {/* <FunctionalIcon
              type="toggle"
              icon={<MdOutlineLightMode className="text-2xl" />}
              title="Mode"
              fun={() => {
                theme === 'light'
                  ? setTheme('dark')
                  : theme === 'retro'
                    ? setTheme('forest')
                    : null;
              }}

              // <MdOutlineDarkMode />
            /> */}
          </div>
          <div className="bg-accent-content/10 active:bg-accent-content/20 rounded-xl p-1 px-3 transition-all duration-500">
            <FunctionalIcon
              type="navigate"
              to="/login"
              title="Logout"
              icon={<IoIosLogOut className="text-2xl" />}
              name="Logout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
