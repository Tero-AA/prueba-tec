import React from 'react';
import Home from '../screens/Home';
import LoginForm from '../screens/LoginForm';
import {
  Route,
  Switch,
} from "react-router-dom";
import styled from 'styled-components';
import RegisterForm from '../screens/RegisterForm';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </Container>
  );
}

export default App;