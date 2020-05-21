import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUserRequest, signUserGoogleRequest } from '../../../store/actions';
import Error from '../../../components/UI/Error';
import Theme from '../../../styles/ThemeProvider';
import {
  Wrapper,
  FormWrapper,
  LogoWrapper,
  Title,
  SubTitle,
  Input,
  SubmitButton,
  GoogleSignButton,
  ActionWrapper,
} from '../styles';

const icon = require('./assets/icon.png');
const googleIcon = require('../assets/google.svg');

function Login() {
  const dispatch = useDispatch();
  const { isPending } = useSelector((state) => state.auth);
  const {
    register, handleSubmit, setValue, errors,
  } = useForm();

  function handleGoogleSignIn() {
    dispatch(signUserGoogleRequest());
  }

  async function onSubmit(values) {
    const payload = {
      email: values.email,
      password: values.password,
    };
    await dispatch(loginUserRequest(payload)).then((res) => {
      if (!res.operationType) {
        setValue('password', null);
      }
    });
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
          <GoogleSignButton type="button" onClick={handleGoogleSignIn}>
            <img src={googleIcon} alt="google" />
            Sign In with Google
          </GoogleSignButton>
          <p className="separator">Or Sign up with Email</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="email"
              hasError={errors && errors.email}
              ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
              placeholder="Email address"
            />
            <Error error={errors && errors.email}>
              {errors && errors.email && errors.email.type === 'required' ? 'Email is required' : 'Invalid Email address'}
            </Error>
            <Input
              type="password"
              name="password"
              hasError={errors && errors.password}
              ref={register({ required: true })}
              placeholder="Password"
            />
            <Error error={errors && errors.password}>
              Password field is required
            </Error>
            <SubmitButton type="submit" disabled={isPending}>Sign in</SubmitButton>
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
