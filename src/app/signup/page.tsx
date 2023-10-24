"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';
import styles from './page.module.css'
import axois from 'axios'



export default function SignUp() {
    const [userName, setUserName]= useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [Password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showValidationMessage, setShowValidationMessage] = useState<boolean>(false);
    const [validationMessage, setValidationMessage] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    

    const validatePassword = () => {
        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        if (!Password) {
            setShowValidationMessage(false);
            return;
        }
        if (passwordRegex.test(Password)) {
            setShowValidationMessage(false);
        } else {
            setShowValidationMessage(true);
            setValidationMessage(
                "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number, and one special character"
            );
        }
    }
    const isFormValid =
    userName.trim() !== '' &&
    email.trim() !== '' &&
    Password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    !showValidationMessage;

    const handlePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       
        if (Password !== confirmPassword) {
            setShowValidationMessage(true);
            setValidationMessage("Passwords do not match.");
            return;
        }

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        console.log({
            email: email,
            password: password,
        });

        axois.post("http://localhost:3001/signup",{userName, email, password, confirmPassword})
        .then(result => {
            setAlertMessage('Registration successful');
            setUserName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        })
        
        .catch(err=>console.log(err))
    }

    return (
        <div >
            <Container className={styles.signup_form}>
                <Box className={styles.signup_box}>
                    <Typography className={styles.login_name} component='h1' variant='h5'>
                        Sign Up
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin='normal'
                            autoComplete="given-name"
                            required
                            fullWidth
                            id="userName"
                            label='User Name'
                            name="userName"
                            autoFocus
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type={showPassword ? 'text' : 'password'}
                            id='password'
                            autoComplete='current-password'
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            onInput={validatePassword}
                            InputProps={{
                                endAdornment: (
                                    <span onClick={handlePasswordVisibility}>
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </span>
                                )
                            }}
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='confirmPassword'
                            label='Confirm Password'
                            type='password'
                            id='confirmPassword'
                            autoComplete='current-password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onInput={validatePassword}
                            InputProps={{
                                endAdornment: (
                                    <span onClick={handlePasswordVisibility}>
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </span>
                                )
                            }}
                        />
                        {showValidationMessage && (
                            <span className={styles.validation_message}>{validationMessage}</span>
                        )}
                       <Button className={!isFormValid? styles.signup_button_valid : styles.signup_button} type='submit' variant='contained' sx={{ mt: 3, mb: 2 }} disabled={!isFormValid}>
                           Sign Up
                        </Button>
                        <Link className={styles.login_page_router} href="/login">
                            Log In?
                        </Link>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}


