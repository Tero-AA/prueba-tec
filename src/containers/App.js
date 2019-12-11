import React, { Component } from 'react';
import Home from '../screens/Home';
import LoginForm from '../screens/LoginForm';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import styled from 'styled-components';


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
          </div>
        </Router>

      </Container>
    );
  }
}

export default App;