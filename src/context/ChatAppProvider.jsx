import { createContext, useContext, useEffect, useState } from 'react';

const chatAppContext = createContext({});

const ChatAppProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('chat-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('chat-theme', theme);
  }, [theme]);
  return (
    <chatAppContext.Provider
      value={{
        isCheckingAuth,
        authUser,
        setAuthUser,
        setIsCheckingAuth,
        fullWidth,
        setFullWidth,
        isUpdatingProfile,
        setIsUpdatingProfile,
        theme,
        setTheme,
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
