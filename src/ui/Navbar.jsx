import { IoIosLogOut } from 'react-icons/io';
import { UseChatAppContext } from '../context/chatAppProvider';
import ChatLogo from './ChatLogo';
import { useNavigate } from 'react-router-dom';
import FunctionalIcon from './FunctionalIcon';
import {
  MdForest,
  MdKeyboardArrowDown,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from 'react-icons/md';
import { useState } from 'react';
import { Themes } from '../Components/constants/constants';
import { SiRetropie } from 'react-icons/si';

const Navbar = () => {
  const { authUser, theme, setTheme } = UseChatAppContext();
  const initialThemeIconState = () => {
    if (theme === 'dark') return <MdOutlineDarkMode size={20} />;
    if (theme === 'forest') return <MdForest size={20} />;
    if (theme === 'retro') return <SiRetropie size={20} />;
    if (theme === 'light') return <MdOutlineLightMode size={20} />;
  };
  const [dropDown, setdropDown] = useState(false);
  const [Icon, setIcon] = useState(initialThemeIconState);
  const navigate = useNavigate();
  const handleNavigate = () => {
    // if (authUser) {
    //   navigate('/');
    // }
    navigate('/');
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
        <div className="relative flex items-center justify-between gap-5">
          <div
            onClick={() => setdropDown((prev) => !prev)}
            className="bg-accent-content/10 active:bg-accent-content/20 relative flex cursor-pointer items-center justify-center rounded-xl p-1 px-2 transition-all duration-200 active:scale-90"
          >
            <FunctionalIcon type="toggle" icon={Icon} title="Mode" />
            <MdKeyboardArrowDown
              className="cursor-pointer active:scale-90"
              size={20}
            />
          </div>
          {dropDown && (
            <div className="bg-base-200 border-accent-content absolute bottom-[-160px] left-[-100px] z-10 flex w-40 flex-col gap-2 rounded-lg border md:bottom-[-40px] md:left-[-400px] md:h-10 md:w-120 md:flex-row md:items-center md:justify-center md:gap-5">
              {Themes.map((item, index) => {
                const inputId = `theme-${index}`;
                return (
                  <div key={index} className="flex gap-1">
                    <div
                      onClick={() => {
                        setTheme(item.value);
                        setIcon(item.icon);
                      }}
                      className="flex w-22 cursor-pointer items-center justify-center gap-1 p-1"
                    >
                      <input
                        id={inputId}
                        type="radio"
                        value={item.value}
                        onChange={() => {
                          setTheme(item.value);
                          setIcon(item.icon);
                        }}
                        name="theme"
                        checked={item.value === theme}
                        className="bg-base-300"
                      />
                      <label htmlFor={inputId}>{item.icon}</label>
                      <label htmlFor={inputId}>{item.value}</label>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="bg-accent-content/10 active:bg-accent-content/20 rounded-xl p-1 px-3 transition-all duration-200 active:scale-90">
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
