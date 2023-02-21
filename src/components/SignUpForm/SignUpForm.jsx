import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles.css";


function SignUpForm() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = ('');

    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="signupContainer">
            <form>
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        size="small"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                &nbsp;
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        size="small"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}

                    />
                </div>
                &nbsp;
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
                Already have an account? <br />
                <button>Log in here</button>
            </div>

        </div>
    )
}

export default SignUpForm;