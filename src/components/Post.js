import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { deletePost } from '../utils/api';

const Post = ({ title, body }) => {

  const handleClick = e => {
    e.preventDefault();

    deletePost()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
        <Button onClick={handleClick} variant="primary">Delete post</Button>
      </Card.Body>
    </Card>
  );
};

export default Post;