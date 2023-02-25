import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import HomeFinderLogo from '../../../assets/images/HomeFinder_Logo.svg';
import Logo from '../../logo/Logo';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import GoogleIcon from '../../../assets/images/google.svg';
import FacebookIcon from '../../../assets/images/facebook.svg';
import { Typography } from '@mui/material';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import './SignupForm.css';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="www.HomeFinder.com"
      >
        www.HomeFinder.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function SignUpForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUpWithGoogle = () => {
    //Codes here
  };

  const handleSignUpWithFaceBook = () => {
    //Codes here.
  };

  const handleChange = (e) => {
    // Codes here.
    //console.log(e.target.value);
  };

  return (
    <div className="bg">
      <div className="wrapper-logo">
        <Logo
          url={HomeFinderLogo}
          mainLogo="loginLogo"
        ></Logo>
      </div>
      <div className="formContainer">
        <form>
          {/* Beginning of grid */}
          <Grid
            container
            spacing={2}
            columns={16}
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              item
              sm={8}
              justifyContent="flex-end"
            >
              <TextField
                margin="normal"
                required
                id="firstName"
                label="First Name"
                // size="small"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid
              item
              sm={8}
            >
              <TextField
                margin="normal"
                required
                id="lastName"
                label="Last Name"
                // size="small"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Grid>
          </Grid>
          {/* End of grid */}
          <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            fullWidth="full"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {/* End of email text field */}
          <ToggleButtonGroup
            color="primary"
            value={userType}
            exclusive
            onChange={handleChange}
            aria-label="user"
            sx={{ mt: 1.5 }}
            fullWidth="full"
          >
            <ToggleButton
              sx={{
                border: 0.5,
              }}
              value="homeOwnerUser"
            >
              Home Owner
            </ToggleButton>
            <ToggleButton
              sx={{
                border: 0.5,
              }}
              value="memberUser"
            >
              Member User
            </ToggleButton>
          </ToggleButtonGroup>
          {/*End of ToggleButton  */}
          <FormControlLabel
            control={
              <Checkbox
                value="inspiration"
                color="primary"
              />
            }
            label="I want to receive inspiration, marketing, promotions, and updates via email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            href="/"
            size="large"
          >
            Sign Up
          </Button>
          <div class="margin-break"></div>
          <Typography align="center"> OR </Typography>
          <div class="margin-break"></div>
          <Grid
            container
            spacing={2}
            columns={16}
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              item
              sm={8}
              justifyContent="flex-end"
            >
              <Button
                variant="outlined"
                onClick={handleSignUpWithGoogle}
              >
                <img
                  src={GoogleIcon}
                  class="icon"
                />
                Sign up with Google
              </Button>
            </Grid>
            <Grid
              item
              sm={8}
            >
              <Button
                variant="outlined"
                onClick={handleSignUpWithFaceBook}
              >
                <img
                  src={FacebookIcon}
                  class="icon"
                />
                Sign up with Facebook
              </Button>
            </Grid>
          </Grid>
        </form>
        &nbsp;
        <hr />
        <Grid
          container
          justifyContent="flex-end"
        >
          <Grid item>
            <Link
              underline="none"
              href="/"
            >
              {'Already have an account? Sign In'}
            </Link>
          </Grid>
        </Grid>
        &nbsp;
        <Copyright />
      </div>
    </div>
  );
}

export default SignUpForm;
