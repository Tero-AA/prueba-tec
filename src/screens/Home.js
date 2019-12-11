import React, { Component } from 'react';
import PostForm from '../containers/PostForm';
import Posts from '../containers/Posts';

function Home() {
  return (
    <>
      <h1>Consuming API with React for nominapp applicattion</h1>
      <h2>Create post: </h2>
      <PostForm />
      <h2>Posts: </h2>
      <Posts />
    </>
  );
}

export default Home;