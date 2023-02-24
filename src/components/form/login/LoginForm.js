import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import { GoogleButton } from 'react-google-button';
import FacebookLogin from 'react-facebook-login';
import { UserAuth } from '../../../contexts/auth/AuthContext';

import "../login/LoginForm.css"

import Logo from '../../logo/Logo';
import HomeFinderLogo from '../../../assets/images/HomeFinder_Logo.svg';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../../contexts/auth/AuthContext';



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="www.HomeFinder.com">
                www.HomeFinder.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function LoginForm() {
    // Provide Context
   // const { googleSignIn, user } = UserAuth();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
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
        if (user != null) {
            navigate('/dashboard'); // use hook to redirect to dashboard page upon successful login
        }
    }, [user, navigate]);


    return (

        <div className='bg'>
            <div className='wrapper-logo' >
                <Logo url={HomeFinderLogo} mainLogo='loginLogo'></Logo>
            </div>
            <div className="formContainer">
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
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        href="/"
                        size="large"
                    >Sign In
                    </Button>
                    <div class="margin-break"></div>
                    <Typography align='center'> OR </Typography>
                    <p />
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={8}>
                            <GoogleButton onClick={handleGoogleSignIn} />
                        </Grid>
                        <Grid item xs={8}>
                            <FacebookLogin onClick={handleFacbookSignIn} />
                        </Grid>

                    </Grid>

                </form>
                &nbsp;
                <hr />
                <Grid container>
                    <Grid item sm>
                        <Link href="reset" >
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="signup" >
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
                &nbsp;
                <Copyright />
            </div>
        </div>
    )
}

export default LoginForm;