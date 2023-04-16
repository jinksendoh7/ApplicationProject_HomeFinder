import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '../../../assets/images/google.svg';
import FacebookIcon from '../../../assets/images/facebook.svg';
import { Button, TextField, Link, Grid, Checkbox, FormControlLabel, Typography  } from "@mui/material";
import { UserAuth } from '../../../contexts/auth/AuthContext';
import {ErrorMessageConst } from '../../../constants/AppConstants';
import '../login/LoginForm.css';

import Logo from '../../logo/Logo';
import HomeFinderLogo from '../../../assets/images/HomeFinder_Logo.svg';
import CopyRightComponent from '../../copyright/CopyRightComponent';
import ErrorComponent from '../../error/ErrorComponent';
import {RoutesConst} from '../../../constants/AppConstants'

function LoginForm() {
  // Inject Context
  const { googleSignIn, facebookSignIn, LoginWithFirebaseAuth, user, setUser } = UserAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate(RoutesConst.LISTING_ROUTE);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(error.message);
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      if(email.length > 0 && password.length > 0){
        await LoginWithFirebaseAuth(email, password);
        navigate(RoutesConst.LISTING_ROUTE);
      }
      else{
        setIsError(true);
        setErrorMessage(ErrorMessageConst.INVALID_CREDENTIAL)
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(error.message);
    }
  };


  const handleFacbookSignIn = async () => {
    try {
      await facebookSignIn();
    } catch (error) {
         console.log(error);
      setIsError(true);
      setErrorMessage(error.message);

    }
  };

  useEffect(() => {
    if (user !== null && isError) {
       // use hook to redirect to dashboard page upon successful login
      navigate(RoutesConst.LISTING_ROUTE);
    }
  }, [user, navigate, isError]);

  return (
    <div className="bg">
      <div className="wrapper-logo">
      <div className='initialLogo'>
        <Logo
          url={HomeFinderLogo}
          mainLogo="loginLogo"
        ></Logo>
        </div>
      </div>
      <div className="formContainer">
      <div className="error-error">
            {isError && <ErrorComponent message= {errorMessage} />}
          </div>
        <form>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange = {(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = {(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            href="/"
            size="large"
            onClick={(e) => handleLogIn(e)}
          >
            Sign In
          </Button>
          <div className="margin-break"></div>
          <Typography align="center"> OR </Typography>
          <div className="margin-break"></div>
          <Grid
            container
            spacing={2}
            columns={16}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              sm={8}
              justifyContent="flex-end"
            >
              <Button
                variant="outlined"
                onClick={handleGoogleSignIn}
              >
                <img
                  src={GoogleIcon}
                  className="icon"
                />
                Signin with Google
              </Button>
            </Grid>
            <Grid
              item
              sm={8}
            >
              <Button
                disabled={true} // Disabled the signin button temporarily, until fix is found.
                variant="outlined"
                onClick= {handleFacbookSignIn}
              >
                <img
                  src={FacebookIcon}
                  className="icon"
                />
                Signin with Facebook
              </Button>
            </Grid>
          </Grid>
        </form>
        &nbsp;
        <hr />
        <Grid container>
          <Grid
            item
            sm
          >
            <Link href="reset">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link href="signup">{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
        &nbsp;
        <CopyRightComponent />
      </div>
      <div className="margin-break"></div>
      <div className="margin-break"></div>
    </div>
  );
}

export default LoginForm;
