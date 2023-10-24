"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './page.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import Layout from '../layout';

interface LoginProps {
  someProp: string;
  anotherProp: number;
}

export default function Login(props: LoginProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [alertFailedMessage, setAlertFailedMessage] = useState<string>(' ')
  const [userName, setUserName]=useState<string>('')
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/');
  };
 

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const isEmailValid = email.trim() !== ''  ;
  const isPasswordValid = password.trim() !== '' ;
  const isButtonDisabled = !isEmailValid || !isPasswordValid;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isEmailValid || !isPasswordValid) {
      setAlertFailedMessage("Please enter a valid email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/login", { email, password });

      if (response.data.message === "Success") {

        setAlertMessage("Login Successfully");
        const newUserName = response.data.userName;
        setUserName(newUserName);
        console.log("Login SUccessfully")
        console.log("User Name:", newUserName); 
        handleNavigation(); 
        return (
          <Layout newUserName={newUserName} > </Layout>
          
        )
      }
      else {
        setAlertFailedMessage("Login failed. Please check your email and password.");


        console.log("Login failed. Please check your email and password.");
      }
    }
    catch (error) {
      console.error("An error occurred during login:", error);
    }
  }

  return (
    <div>
      <Container fluid>
        <div className={styles.box_con}>
          <Box className={styles.login_box_1}>
            <Typography className={styles.login_name} component='h1' variant='h5'>
              Log in
            </Typography>

            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <span onClick={handlePasswordVisibility}>
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </span>
                  ),
                }}
              />
              <Button  className={isButtonDisabled ? styles.login_btn_disabled : styles.login_btn} type='submit' variant='contained' sx={{ mt: 4, mb: 3 }} disabled={isButtonDisabled}>
                Log In
              </Button>
              <div className={styles.alertMessage}>{alertMessage}</div>
              <div className={styles.alertFailedMessage}>{alertFailedMessage}</div>
              <br />
              <Link href='#'>
                Forgot password
              </Link>
              <Link className={styles.signup_link} href="/signup">
                Don't have an account? Sign Up
              </Link>
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  );
}


