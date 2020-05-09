import React, { useState } from 'react';

function Login() {
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
    console.log('payload', payload);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
        <br />
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
