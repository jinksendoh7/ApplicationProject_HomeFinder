//import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../login/LoginForm.css";
import Logo from "../../logo/Logo";
import HomeFinderLogo from "../../../assets/images/HomeFinder_Logo.svg";
import Copyright from "../../copyright/CopyRight";


function ChangePasswordForm() {
 // const navigate = useNavigate();

 // const [password, setPassword] = useState("");
 // const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="bg">
      <div className="wrapper-logo">
        <Logo url={HomeFinderLogo} mainLogo="loginLogo"></Logo>
      </div>
      <div className="formContainer">
        <form>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            href="/"
            size="large"
          >
            Change Password
          </Button>
          <div class="margin-break"></div>
        </form>
        &nbsp;
        <hr />
        &nbsp;
        <Copyright />
      </div>
    </div>
  );
}

export default ChangePasswordForm;
