import { UseChatAppContext } from '../../context/chatAppProvider';
import Spinner from '../../ui/Spinner';

const HomePage = () => {
    const { isCheckingAuth } = UseChatAppContext();
    return <div>{isCheckingAuth ? <Spinner /> : null}</div>;
};

export default HomePage;
