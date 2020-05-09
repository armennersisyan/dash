import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/actions';
import Theme from '../../../styles/ThemeProvider';
import {
  Wrapper,
  FormWrapper,
  LogoWrapper,
  Title,
  SubTitle,
  Input,
  SubmitButton,
} from './styles';

const icon = require('./assets/icon.png');

function Login() {
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
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      email,
      password,
    };
    dispatch(login(payload));
    return payload;
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
            <SubmitButton type="submit">Sign in</SubmitButton>
          </form>
        </FormWrapper>
      </Wrapper>
    </Theme>
  );
}

export default Login;
