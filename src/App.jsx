import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './app.css';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import { ChatAppProvider, UseChatAppContext } from './context/chatAppProvider';
import AppLayout from './ui/AppLayout';
import PageNotFound from './ui/PageNotFound';
import Call from './Components/Calls/Call';
const App = () => {
  const { authUser, theme } = UseChatAppContext();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <ChatAppProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div data-theme={theme} className="relative">
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/calls" element={<Call />} />
              </Route>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: '8px' }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: '16px',
                  maxWidth: '500px',
                  padding: '16px 24px',
                  backgroundColor: 'var(--color-base-300)',
                  color: 'var(--color-base)',
                },
              }}
            />
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </ChatAppProvider>
  );
};

export default App;
