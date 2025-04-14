import { HiOutlineViewList } from 'react-icons/hi';
import FunctionalIcon from './FunctionalIcon';
import { CiSettings } from 'react-icons/ci';
import { IoCallOutline, IoChatbubblesOutline } from 'react-icons/io5';
import { MdOutlineStarOutline } from 'react-icons/md';
import { UseChatAppContext } from '../context/chatAppProvider';

const Sidebar = () => {
  const { fullWidth, setFullWidth } = UseChatAppContext();
  const smallWidth =
    'bg-base-200 h-screen w-12 border-r border-accent-content ';
  const bigWidth =
    'bg-base-300 z-10 h-screen w-48 absolute top-16 left-0 border-r border-accent-content ';
  return (
    <div className={fullWidth ? bigWidth : smallWidth}>
      <div
        className={`flex h-full flex-col justify-between py-24 ${fullWidth ? 'items-start pl-2.5' : 'items-center'}`}
      >
        <div
          className={`flex flex-col gap-4 ${fullWidth ? 'items-start' : ''}`}
        >
          <div
            onClick={() => {
              setFullWidth((prev) => !prev);
            }}
          >
            <FunctionalIcon
              title="List"
              icon={<HiOutlineViewList className="text-2xl" />}
            />
          </div>
          <FunctionalIcon
            type="navigate"
            to="/"
            title="chats"
            icon={<IoChatbubblesOutline className="text-2xl" />}
            name={fullWidth ? 'chats' : null}
          />
          <FunctionalIcon
            icon={<MdOutlineStarOutline className="text-2xl" />}
            to="/stared-messages"
            type="navigate"
            title="Starred messages"
            name={fullWidth ? 'starred messages' : null}
          />
          <FunctionalIcon
            icon={<IoCallOutline className="text-2xl" />}
            to="/calls"
            type="navigate"
            title="Calls"
            name={fullWidth ? 'calls' : null}
          />
        </div>
        <div
          className={`flex flex-col gap-4 border-t-1 pt-2 ${fullWidth ? 'w-full items-start' : ''}`}
        >
          <FunctionalIcon
            name={fullWidth ? 'profile' : null}
            title="Profile"
            to="/profile"
            type="profile"
          />
          <FunctionalIcon
            icon={<CiSettings className="text-2xl" />}
            to="/settings"
            type="navigate"
            title="Settings"
            name={fullWidth ? 'settings' : null}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
