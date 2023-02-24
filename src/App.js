import { Routes, Route } from "react-router-dom";
import './App.css';

import { AuthContextProvider } from './contexts/auth/AuthContext';

import LayoutPage from "./pages/common/LayoutPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import LoginPage from "./pages/login/LoginPage";
import ResetPasswordPage from "./pages/reset-password/ResetPasswordPage";
import SignupPage from "./pages/signup/SignupPage";
import ProtectedPage from "./pages/common/ProtectedPage";

function App() {
  return ( 
     <AuthContextProvider>
        <Routes>
            <Route path="/" element={<LoginPage />}>
            <Route index element={<LoginPage />} />
            <Route path="reset" element={<ResetPasswordPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route
                path='/dashboard'
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
