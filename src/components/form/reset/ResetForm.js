import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../login/LoginForm.css";
import Logo from "../../logo/Logo";
import HomeFinderLogo from "../../../assets/images/HomeFinder_Logo.svg";
import CopyRightComponent from "../../copyright/CopyRightComponent";
import { Button, TextField, Link, Grid, Typography } from "@mui/material";
import { UserAuth } from "../../../contexts/auth/AuthContext";
import { RoutesConst } from "../../../constants/AppConstants";
import { ErrorMessageConst } from "../../../constants/AppConstants";
import ErrorComponent from "../../error/ErrorComponent";

function ResetForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { SendPasswordReset, user } = UserAuth();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      if (email.length > 0) {
        await SendPasswordReset(email);
        navigate(RoutesConst.SIGNIN_ROUTE);
      } else {
        setIsError(true);
        setErrorMessage(ErrorMessageConst.INVALID_CREDENTIAL);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="bg">
      <div className="wrapper-logo">
        <Logo url={HomeFinderLogo} mainLogo="loginLogo"></Logo>
      </div>
      <div className="formContainer">
        <div>{isError && <ErrorComponent message={errorMessage} />}</div>
        <form>
          <Typography>
            {
              "Lost your password? Please enter your email address. You will receive a link to create a new password via email."
            }
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            href="/"
            size="large"
            onClick={(e) => handleReset(e)}
          >
            Reset Password
          </Button>
          <div className="margin-break"></div>
        </form>
        &nbsp;
        <hr />
        <Grid container>
          <Grid item>
            <Link href="login">{"Remember your password?"}</Link>
          </Grid>
        </Grid>
        &nbsp;
        {/* <Copyright /> */}
        <CopyRightComponent />
      </div>
    </div>
  );
}

export default ResetForm;
