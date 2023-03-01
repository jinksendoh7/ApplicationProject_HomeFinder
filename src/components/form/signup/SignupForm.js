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
import { useNavigate } from "react-router-dom";

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import CopyRight from '../../copyright/CopyRight';
import SuccessComponent from '../../success/SuccessComponent';
import ErrorComponent from '../../error/ErrorComponent';
import './SignupForm.css';

import { db } from '../../../configs/FirebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from '../../../configs/FirebaseConfig';

import { createUserWithEmailAndPassword } from 'firebase/auth';


function SignUpForm() {
  const navigate = useNavigate();
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('memberUser');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [recieve, setRecieve] = useState(false);

  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');




  const handleSignUpWithGoogle = () => {
    //Codes here
  };

  const handleSignUpWithFaceBook = () => {
    //Codes here.
  };

  const handleChange = (e) => {
    setUserType(e.target.value);
    // Codes here.
    //console.log(e.target.value);
  };

  const newUser = () => {
    let userID = '';
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
          //Signed In
          const user = userCredential.user;
          userID = user.uid;
          console.log(userID, user);
          console.log(user.uid);
          return userID
        }).catch ((error) => {
         console.log(error.message);
        })
  } 

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setIsError(true);
      setErrMessage('Passwords do not match.');
    }
    else if (password.length <= 4 || confirmPassword <= 4) {
      setIsError(true);
      setErrMessage('Password length must be greater then 4 characters');
    }
    else {
      setIsSuccess(true);
      setSuccessMessage('Welcome to HomeFinder!');
      try {
        const userUID = newUser()
        const docRef = await addDoc(collection(db, 'users'), {
          uid: userUID,
          timestamp: serverTimestamp(),
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
          recieve: recieve,
          usertype: userType
        },
        {
          merge: true
        })
        console.log('User added to database with ID: ', docRef.id);
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setUserType('');
        setRecieve(false);
        navigate('/');
      } catch (e) {
        console.error('Error adding user: ', e);
      }
    }
  }

  return (
    <div className="bg">
      <div className="wrapper-logo">
        <Logo
          url={HomeFinderLogo}
          mainLogo="loginLogo"
        ></Logo>
      </div>
      <div className="formContainer form-wrapper">
        <form onSubmit={SubmitHandler} href="login" >
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
                fullWidth
                value={firstName}
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
                fullWidth
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
          {/*Password Field */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Confirm Password"
            type="password"
            id="password2"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            autoComplete="current-password"
          />
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
          {/* checkbutton */}
          <FormControlLabel
            control={
              <Checkbox
                checked={recieve}  // changed value to checked to enable the false state set after submission to uncheck if was checked originally.
                onChange={(e) => setRecieve(e.target.checked)}
                color="primary"
              />
            }
            label="I want to receive inspiration, marketing, promotions, and updates via email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
          >
            Sign Up
          </Button>
          <div class="error-error">
            {isError && <ErrorComponent message= {errMessage} />}
            {isSuccess && <SuccessComponent message={successMessage} />}
          </div>
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
                  alt='google-icon'
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
                  alt='facebook-icon'
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
        {/* <Copyright /> */}
        <CopyRight />
      </div>
    </div>
  );
}

export default SignUpForm;
