import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../../contexts/auth/AuthContext';



function LoginForm() {
    // Provide Context
    const { googleSignIn, user } = UserAuth();

    const navigate = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = ('');

   // const [errorMessage, setErrorMessage] = useState('');

   const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
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

                    <GoogleButton onClick={handleGoogleSignIn} />
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