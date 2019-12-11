import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  height: 100vh;
  padding:  150px 0 0 0;
`;

function LoginForm() {

  const [values, setValues] = useState({ username: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log("You are Logged in");

  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="username"
          onChange={handleChange}
          placeholder="Username"
          value={values.username}
        />
        <Input
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={values.password}
        />
        <Button>Login</Button>
      </Form>
    </Container>
  )
}

export default LoginForm;