import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import styled from 'styled-components';
import { getPosts } from '../utils/api';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: #eee;
`;

function Posts() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  });

  const renderPosts = () => {

    return posts.map(post => {
      const { title, body, id } = post;

      return (
        <Post
          key={id}
          title={title}
          body={body}
        />
      );
    });
  }


  return (
    <Container>
      {loading ? 'loading...' : renderPosts()}
    </Container>
  );
}

export default Posts;