import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUserRequest } from '../../../store/actions';
import Theme from '../../../styles/ThemeProvider';
import {
  Wrapper,
  FormWrapper,
  LogoWrapper,
  Title,
  SubTitle,
  Input,
  SubmitButton,
  ActionWrapper,
} from '../styles';

const icon = require('./assets/icon.png');

function Login() {
  const dispatch = useDispatch();
  const {
    register, handleSubmit, errors,
  } = useForm();

  function onSubmit(values) {
    const payload = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUserRequest(payload));
  }

  return (
    <Theme>
      <Wrapper>
        <FormWrapper>
          <LogoWrapper>
            <img src={icon} alt="" />
          </LogoWrapper>
          <Title>Login to your Hey account</Title>
          <SubTitle>Sign up on Hey today & start sharing your thoughts freely</SubTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="email"
              ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
              placeholder="Email address"
            />
            {errors && errors.email && errors.email.type === 'required' && 'Email is required'}
            {errors && errors.email && errors.email.type === 'pattern' && 'Invalid Email address'}
            <Input
              type="password"
              name="password"
              ref={register({ required: true })}
              placeholder="Password"
            />
            {errors.password && 'Password field is required'}
            <SubmitButton type="submit">Sign in</SubmitButton>
          </form>
          <ActionWrapper>
            <p>
              Don&apos;t have an account yet ?&nbsp;
              <Link to="/register">Register</Link>
            </p>
          </ActionWrapper>
        </FormWrapper>
      </Wrapper>
    </Theme>
  );
}

export default Login;
