import { Routes, Route } from "react-router-dom";
import './App.css';

import { AuthContextProvider } from './contexts/auth/AuthContext';

import LayoutPage from "./pages/common/LayoutPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import LoginPage from "./pages/login/LoginPage";
import ResetPasswordPage from "./pages/reset-password/ResetPasswordPage";
import SignupPage from "./pages/signup/SignupPage";
import ProtectedPage from "./pages/common/ProtectedPage";
import {RoutesConst} from './constants/AppConstants';

function App() {
  return ( 
     <AuthContextProvider>
        <Routes>
            <Route path= {RoutesConst.ROUTE_HOME} element={<LayoutPage />}>
            <Route index element={<LoginPage />} />
            <Route path={RoutesConst.SIGNIN_ROUTE} element={<LoginPage />} />
            <Route path={RoutesConst.RESET_PASSWORD_ROUTE}element={<ResetPasswordPage />} />
            <Route path={RoutesConst.SIGNUP_ROUTE} element={<SignupPage />} />
            <Route
                path={RoutesConst.DASHBOARD_ROUTE}
                element={
                  <ProtectedPage>
                    <DashboardPage />
                  </ProtectedPage>
                }/>
          </Route>
        </Routes>
    </AuthContextProvider>

    
  );
}

export default App;
