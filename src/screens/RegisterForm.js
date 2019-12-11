import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import styled from 'styled-components';
import { Redirect } from "react-router-dom";


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  height: 100vh;
  padding:  150px 0 0 0;
`;

function RegisterForm() {

  const [values, setValues] = useState({ username: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log("You'r register has been completed!");

  }
  const { username, password } = values;

  const token = localStorage.getItem('token');

  if (token) return <Redirect to="/" />
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <Input
          name="username"
          onChange={handleChange}
          placeholder="Username"
          value={username}
        />
        <Input
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={password}
        />
        <Button>Sign Up</Button>
      </Form>
    </Container>
  )
}

export default RegisterForm;