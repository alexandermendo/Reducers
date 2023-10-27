import AuthContextProvider from './contexts/AuthContext';
import { AppRouter } from './components/routers/AppRouter';

export function App() {
  return (
    <AuthContextProvider>
      <AppRouter/>
    </AuthContextProvider>
  );
}
