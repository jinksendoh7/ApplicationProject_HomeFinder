import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import "../login/LoginForm.css";
import { Typography } from "@mui/material";
import Logo from "../../logo/Logo";
import HomeFinderLogo from "../../../assets/images/HomeFinder_Logo.svg";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="www.HomeFinder.com">
        www.HomeFinder.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function ChangePasswordForm() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
