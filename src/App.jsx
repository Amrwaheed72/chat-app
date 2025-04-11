import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar from './ui/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 0,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
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
                            backgroundColor: '#9db787 ',
                            color: 'black',
                        },
                    }}
                />
            </div>
        </QueryClientProvider>
    );
}

export default App;
