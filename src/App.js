import { Routes, Route } from "react-router-dom";
import './App.css';

import { AuthContextProvider } from './contexts/auth/AuthContext';

import ListingPage from "./pages/listings/ListingsPage";
import AddListingPage from "./pages/add-listings/AddListingPage";
import LoginPage from "./pages/login/LoginPage";
import ResetPasswordPage from "./pages/reset-password/ResetPasswordPage";
import SignupPage from "./pages/signup/SignupPage";
import ProtectedPage from "./pages/common/ProtectedPage";
import SavedListingPage  from "./pages/saved-listing/SavedListingPage";

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
                path={RoutesConst.LISTING_ROUTE}
                element={
                  <ProtectedPage>
                    <ListingPage />
                  </ProtectedPage>
                }>
                    <Route
                    path={RoutesConst.ADD_LISTING_ROUTE}
                    element={<AddListingPage />
                    }/>
                      <Route
                    path={RoutesConst.SAVED_LISTING_ROUTE}
                    element={<SavedListingPage />
                    }/>
          </Route>
        </Routes>
    </AuthContextProvider>

    
  );
}

export default App;
