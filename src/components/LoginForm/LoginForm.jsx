import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles.css";
import SignUpForm from "../SignUpForm/SignUpForm";


function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = ('');

    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="signupContainer">
            <form>
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email Address"
                        size="small"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                &nbsp;
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type="password"
                        size="small"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                &nbsp;
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Confirm Password"
                        type="password"
                        size="small"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                </div>  
                &nbsp;
                <div>
                    <Button variant="contained"> SUBMIT </Button>
                </div>
            </form>
            &nbsp;

            <div>
                Don't have an account already?  <br />
                <button>Sign up here</button>
            </div>
            
        </div>
    )
}

export default LoginForm;