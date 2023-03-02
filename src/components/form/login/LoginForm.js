import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import GoogleIcon from '../../../assets/images/google.svg';
import FacebookIcon from '../../../assets/images/facebook.svg';

import { UserAuth } from '../../../contexts/auth/AuthContext';

import '../login/LoginForm.css';

import Logo from '../../logo/Logo';
import HomeFinderLogo from '../../../assets/images/HomeFinder_Logo.svg';
import CopyRight from '../../copyright/CopyRight';
import ErrorComponent from '../../error/ErrorComponent';

function LoginForm() {
  // Inject Context
  const { googleSignIn, facebookSignIn, user } = UserAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
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

    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/dashboard'); // use hook to redirect to dashboard page upon successful login
    }
  }, [user, navigate]);

  return (
    <div className="bg">
      <div className="wrapper-logo">
        <Logo
          url={HomeFinderLogo}
          mainLogo="loginLogo"
        ></Logo>
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
        {/* <Copyright /> */}
        <CopyRight />
      </div>
    </div>
  );
}

export default LoginForm;
