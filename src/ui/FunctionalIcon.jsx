import { useNavigate } from 'react-router-dom';

const FunctionalIcon = ({ icon, title, to, type, name }) => {
  // const { authUser, fullWidth } = UseChatAppContext();
  const navigate = useNavigate();

  const CustomFunction = () => {
    if (type === 'navigate' || type === 'profile') {
      // if (authUser) {
      //   navigate(to);
      // }
      navigate(to);
    }
  };
  return (
    <div
      onClick={CustomFunction}
      className={`flex cursor-pointer items-center justify-center gap-1${type !== 'toggle' ? 'active:scale-90' : ''}`}
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
