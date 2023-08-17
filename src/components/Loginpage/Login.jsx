import React, { useState } from 'react';
import {
    LoginWrapper,
    LoginBox,
    LoginForm,
    LoginInput,
    LoginButton,
  } from './LoginStyles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    //  로그인 처리 로직
  };

  return (
    <LoginWrapper>
      <LoginBox>
        <LogoImageWrapper>
          <LogoImage src={logo} alt="Logo" />
        </LogoImageWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <label>
            이메일
            <LoginInput type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            비밀번호
            <LoginInput type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <LoginButton type="submit">로그인</LoginButton>
        </LoginForm>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
