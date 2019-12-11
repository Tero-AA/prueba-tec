import React from 'react';
import PostForm from '../containers/PostForm';
import Posts from '../containers/Posts';
import { Redirect } from "react-router-dom";

function Home() {
  const token = localStorage.getItem('token');
  if (!token) return <Redirect to='/login' />;
  return (
    <>
      <h1>Consuming API with React for Nominapp application</h1>
      <h2>Create post: </h2>
      <PostForm />
      <h2>Posts: </h2>
      <Posts />
    </>
  );
}

export default Home;