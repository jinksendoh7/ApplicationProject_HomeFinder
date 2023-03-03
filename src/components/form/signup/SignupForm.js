import { useState } from 'react';
import HomeFinderLogo from '../../../assets/images/HomeFinder_Logo.svg';
import Logo from '../../logo/Logo';
import GoogleIcon from '../../../assets/images/google.svg';
import FacebookIcon from '../../../assets/images/facebook.svg';
import { useNavigate } from "react-router-dom";
import { Button, TextField, Link, Grid, Typography, Checkbox, FormControlLabel, ToggleButton, ToggleButtonGroup } from "@mui/material";
import CopyRightComponent from '../../copyright/CopyRightComponent';
import SuccessComponent from '../../success/SuccessComponent';
import ErrorComponent from '../../error/ErrorComponent';
import './SignupForm.css';

import { serverTimestamp } from 'firebase/firestore';

import { UserAuth } from '../../../contexts/auth/AuthContext';
import StorageService from '../../../services/storage/StorageService';

import { FireStoreConst } from '../../../constants/FirebaseConstants';
import { ErrorMessageConst, SuccessMessageConst,RoutesConst } from '../../../constants/AppConstants';

function SignUpForm() {
  const { SignUpWithFirebaseAuth, SignUpWithGoogle} = UserAuth();
  const navigate = useNavigate();

  const [firstName, setfirstName] = useState('');
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

  const handleSignUpWithGoogle = async (e) => {
    e.preventDefault();
    const userInfo =  await SignUpWithGoogle();
          try {
            const docRef = await StorageService.createDoc(FireStoreConst.USER_DOC, {
                  uid: `${userInfo.uid}`,
                  timestamp: serverTimestamp(),
                  firstname:`${userInfo.firstname}`,
                  lastname: `${userInfo.lastname}`,
                  email: `${userInfo.email}`,
                  recieve: recieve,
                  usertype: userType
                });
            console.log(SuccessMessageConst.CONSOLE_LOG_ADD_USER, docRef.id);
            clearForm();
            setIsSuccess(true);
            setSuccessMessage(SuccessMessageConst.WELCOME_MESSAGE);
            navigate(RoutesConst.DASHBOARD_ROUTE);
         
        } catch (e) {
            console.error('Error adding user: ', e);
            setIsError(true);
            setErrMessage(ErrorMessageConst.INVALID_PASSWORD_LENGTH);
            setIsSuccess(false);
          } 
  }

  const handleSignUpWithFaceBook = () => {
    //Codes here.
  };

  const handleChangeUserType = (e) => {
    setUserType(e.target.value);
  };

  const clearForm = () =>{
    // clear controls
    setfirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setUserType('');
    setRecieve(false);
 }
 
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setIsError(true);
      setErrMessage(ErrorMessageConst.PASSWORD_DO_NOT_MATCH);
    }
    else if (password.length <= 4 || confirmPassword <= 4) {
      setIsError(true);
      setErrMessage(ErrorMessageConst.INVALID_PASSWORD_LENGTH);
    }
    else {
      const userInfo =  await SignUpWithFirebaseAuth(email, password);
          try {
            const docRef = await StorageService.createDoc(FireStoreConst.USER_DOC, {
                  uid: `${userInfo.uid}`,
                  timestamp: serverTimestamp(),
                  firstname: firstName,
                  lastname: lastName,
                  email: email,
                  recieve: recieve,
                  usertype: userType
                });
                console.log(SuccessMessageConst.CONSOLE_LOG_ADD_USER, docRef.id);
                navigate(RoutesConst.DASHBOARD_ROUTE);
                clearForm();
                setIsSuccess(true);
                setSuccessMessage(SuccessMessageConst.WELCOME_MESSAGE);
           
        } catch (e) {
            console.error('Error adding user: ', e);
            setIsError(true);
            setErrMessage(e.message);
            setIsSuccess(false);
          } 
    
    }
  }

  return (
    <div className="bg">
      <div className="wrapper-logo">
        <Logo
          url={HomeFinderLogo}
          mainLogo="signUpLogo"
        ></Logo>
      </div>
      <div className="formContainer">
      
          <div className="error-error">
            {isError && <ErrorComponent message= {errMessage} />}
            {isSuccess && <SuccessComponent message={successMessage} />}
          </div>
        <form onSubmit={handleSubmitForm}  >
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
                fullWidth={true}
                value={firstName}
                onChange={(event) => setfirstName(event.target.value)}
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
                fullWidth={true}
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
            fullWidth={true}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {/*Password Field */}
          <TextField
            margin="normal"
            required
            fullWidth = {true}
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
          {/*Confirm Password Field */}
          <TextField
            margin="normal"
            required
            fullWidth={true}
            name="password2"
            label="Confirm Password"
            type="password"
            id="password2"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            autoComplete="current-password"
          />
          {/*Home Owner/Member Select Field */}
          <ToggleButtonGroup
            color="primary"
            value={userType}
            exclusive
            onChange={handleChangeUserType}
            aria-label="user"
            sx={{ mt: 1.5 }}
            fullWidth={true}
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
          <div className="margin-break"></div>
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
          <div className="margin-break"></div>
          <Button
            type="submit"
            fullWidth={true}
            variant="contained"
            size="large"
          >
            Sign Up
          </Button>
          <div className="margin-break"></div>
          <Typography align="center"> OR </Typography>
          <div className="margin-break"></div>
          {/*GOOGLE SIGNUP/ FACEBOOK SIGNUP */}
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
                  className="icon"
                />
                Sign up with Google
              </Button>
            </Grid>
            <Grid
              item
              sm={8}
            >
              <Button
                disabled={true} // // Disabled the signin button temporarily, until fix is found.
                variant="outlined"
                onClick={handleSignUpWithFaceBook}
              >
                <img
                  src={FacebookIcon}
                  alt='facebook-icon'
                  className="icon"
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
        <CopyRightComponent />
      </div>
    </div>
  );
}

export default SignUpForm;
