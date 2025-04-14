import { useNavigate } from 'react-router-dom';
import { UseChatAppContext } from '../context/chatAppProvider';

const FunctionalIcon = ({ icon, title, to, type, name, fun }) => {
  const { authUser, fullWidth } = UseChatAppContext();
  const navigate = useNavigate();

  const CustomFunction = () => {
    if (type === 'navigate' || type === 'profile') {
      if (authUser) {
        navigate(to);
      }
    }
    if (type === 'toggle') {
      fun;
    }
  };
  return (
    <div
      onClick={CustomFunction}
      className="flex cursor-pointer items-center justify-center gap-1 active:scale-90"
      title={title}
    >
      <div>
        {type === 'profile' ? (
          <img src="/user.png" className="h-6 w-6 rounded-full" />
        ) : (
          icon
        )}
      </div>
      <p className="fontino">{name}</p>
    </div>
  );
};

export default FunctionalIcon;
