import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';

import LayoutPage from "./pages/common/LayoutPage";
import LoginPage from "./pages/login/LoginPage";
import ResetPasswordPage from "./pages/reset-password/ResetPasswordPage";
import SignupPage from "./pages/signup/SignupPage";


function App() {
  return (
    <div className="App">
      <div>
        <h1>Start Point</h1>
        <LoginForm />
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
