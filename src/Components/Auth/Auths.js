import React, { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #d061f1 10%, #51f55e, #f5de0c 100%);
`;

const AuthBox = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transform: perspective(600px) rotateX(10deg);
  transition: transform 0.5s, box-shadow 0.5s;

  &:hover {
    transform: perspective(600px) rotateX(0deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: ${props => props.primary ? '#007bff' : '#28a745'};
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${props => props.primary ? '#0056b3' : '#218838'};
  }
`;

const ToggleButton = styled.button`
  margin-top: 20px;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Signed in successfully!');
      navigate('/home'); // Redirect to home page after successful login
    } catch (error) {
      toast.error(`Error signing in: ${error.message}`);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Signed up successfully!');
      navigate('/home'); // Redirect to home page after successful sign-up
    } catch (error) {
      toast.error(`Error signing up: ${error.message}`);
    }
  };

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <AuthContainer>
      <ToastContainer />
      <AuthBox>
        <Title>{isSignIn ? 'Sign In' : 'Sign Up'}</Title>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button primary={isSignIn} onClick={isSignIn ? handleSignIn : handleSignUp}>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </Button>
        <ToggleButton onClick={toggleAuthMode}>
          {isSignIn ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
        </ToggleButton>
      </AuthBox>
    </AuthContainer>
  );
};

export default Auth;
