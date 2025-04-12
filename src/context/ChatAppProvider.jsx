import { createContext, useContext, useState } from 'react';

const chatAppContext = createContext({});

const ChatAppProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);


  return (
    <chatAppContext.Provider
      value={{
        isCheckingAuth,
        authUser,
        setAuthUser,
        setIsCheckingAuth,
      }}
    >
      {children}
    </chatAppContext.Provider>
  );
};

const UseChatAppContext = () => {
  const context = useContext(chatAppContext);
  if (context === undefined)
    throw new Error('ChatAppContext was used outside ChatAppProvider');
  return context;
};
export { ChatAppProvider, UseChatAppContext };
