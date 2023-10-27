import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LOGIN, LOGOUT, PRIVATE } from '../../../common/utils';
import { ProfileRouter } from './ProfileRouter';
import { LogoutRouter } from './LogoutRouter';
import { LoginRouter } from './LoginRouter';
import { HomeRouter } from './HomeRouter';
import { PublicRoute } from '../../components/routers/public/PublicRoute';
import { PrivateRoute } from '../../components/routers/private/PrivateRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PRIVATE} element={<PrivateRoute />}>
          <Route index element={<ProfileRouter />} />
          <Route path={LOGOUT} element={<LogoutRouter />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<HomeRouter />} />
          <Route path={LOGIN} element={<LoginRouter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}