import { Routes, Route } from "react-router-dom";
import './App.css';

import { AuthContextProvider } from './contexts/auth/AuthContext';

import DashboardPage from "./pages/dashboard/DashboardPage";
import LoginPage from "./pages/login/LoginPage";
import ResetPasswordPage from "./pages/reset-password/ResetPasswordPage";
import SignupPage from "./pages/signup/SignupPage";
import ProtectedPage from "./pages/common/ProtectedPage";
import AddListingPage from './pages/listings/AddListingPage';
import {RoutesConst} from './constants/AppConstants';

function App() {
  return ( 
     <AuthContextProvider>
      
        <Routes>
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
                }>
                    <Route
                    path={RoutesConst.ADD_LISTING_ROUTE}
                    element={<AddListingPage />
                    }/>
          </Route>
        </Routes>
    </AuthContextProvider>

    
  );
}

export default App;
