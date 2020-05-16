import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerUserRequest } from '../../../store/actions';
import Error from '../../../components/UI/Error';
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
  const { isPending } = useSelector((state) => state.auth);
  const {
    register, handleSubmit, setValue, errors,
  } = useForm();

  async function onSubmit(values) {
    const payload = {
      email: values.email,
      password: values.password,
    };
    await dispatch(registerUserRequest(payload)).then((res) => {
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
          <Title>Let&apos;s get Started with Hey</Title>
          <SubTitle>Sign up on Hey today & start sharing your thoughts freely</SubTitle>
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
            <SubmitButton type="submit" disabled={isPending}>Register</SubmitButton>
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
