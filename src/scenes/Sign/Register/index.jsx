import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUserRequest } from '../../../store/actions';
import Theme from '../../../styles/ThemeProvider';
import {
  FormWrapper,
  Input,
  LogoWrapper,
  SubmitButton,
  SubTitle,
  Title,
  Wrapper,
  ActionWrapper,
} from '../styles';

const icon = require('./assets/icon.png');

function Register() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(registerUserRequest(payload));
  }

  return (
    <Theme>
      <Wrapper>
        <FormWrapper>
          <LogoWrapper>
            <img src={icon} alt="" />
          </LogoWrapper>
          <Title>Let&apos;s get Started with Hey</Title>
          <SubTitle>Sign up on Hey today & start sharing your thoughts freely</SubTitle>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <SubmitButton type="submit">Register</SubmitButton>
          </form>
          <ActionWrapper>
            <p>
              Already have an account ?&nbsp;
              <Link to="/login">Log in</Link>
            </p>
          </ActionWrapper>
        </FormWrapper>
      </Wrapper>
    </Theme>
  );
}

export default Register;
