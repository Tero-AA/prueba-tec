import React, { Component } from 'react';
import PostForm from './PostForm';
import Posts from './Posts';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Consuming API with React for nominapp applicattion</h1>
        <h2>Create post: </h2>
        <PostForm />
        <h2>Posts: </h2>
        <Posts />
      </Container>
    );
  }
}

export default App;