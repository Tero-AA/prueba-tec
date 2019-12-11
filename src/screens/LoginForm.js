import React, { useState } from 'react';
import Input from '../components/Input';
import { Button } from 'react-bootstrap';
import Form from '../components/Form';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { login } from '../utils/auth';
import { Redirect } from "react-router-dom";


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  height: 100vh;
  padding:  150px 0 0 0;
  `;

function LoginForm(props) {
  const [values, setValues] = useState({ username: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault();

    login({ username, password }).then(data => {
      console.log(data);
      localStorage.setItem('token', data.token);
      props.history.push('/');
    }).catch(error => {
      console.error(error);
      localStorage.setItem('token', null);
    })
  }

  const { username, password } = values;

  const token = localStorage.getItem('token');

  if (token) return <Redirect to="/" />

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <Button onClick={handleSubmit} bsstyle="primary">Login</Button>
        <p>
          Don't have an account?, follow this link <Link to="/register">Sign In</Link>
        </p>
      </Form>
    </Container>
  )
}

export default LoginForm;