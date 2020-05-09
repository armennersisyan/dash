import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #E5EFF6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  background: #fff;
  width: 450px;
  border-radius: 20px;
  box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.02);
  padding: 50px 60px;
  & > form {
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  text-align: center;
  img {
    width: 200px;
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.dark};
  font-size: 33px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 45px;
`;

export const Input = styled.input`
  background: #f7f9fb;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  padding: 0 20px;
  margin-bottom: 15px;
  transition: 0.3s;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
    font-size: 15px;
    font-weight: 500;
  }
  &:focus {
    background: #eee;
  }
`;

export const SubmitButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  transition: 0.3s;
  &:hover {
    background: ${(props) => props.theme.colors.inverse};
  }
`;
