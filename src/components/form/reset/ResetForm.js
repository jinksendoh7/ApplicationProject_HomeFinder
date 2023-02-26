import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import '../login/LoginForm.css';
import { Typography } from '@mui/material';
import Logo from '../../logo/Logo';
import HomeFinderLogo from '../../../assets/images/HomeFinder_Logo.svg';
import CopyRight from '../../copyright/CopyRight';

function ResetForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
          <Typography>
            {
              'Lost your password? Please enter your email address. You will receive a link to create a new password via email.'
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            href="/"
            size="large"
          >
            Reset Password
          </Button>
          <div class="margin-break"></div>
        </form>
        &nbsp;
        <hr />
        <Grid container>
          <Grid item>
            <Link href="login">{'Remember your password?'}</Link>
          </Grid>
        </Grid>
        &nbsp;
        {/* <Copyright /> */}
        <CopyRight />
      </div>
    </div>
  );
}

export default ResetForm;
