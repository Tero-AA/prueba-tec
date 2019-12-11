import React, { useState } from 'react';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import { Button } from 'react-bootstrap';
import Form from '../components/Form';
import { postPost } from '../utils/api';


function PostForm() {

  const [values, setValues] = useState({ title: '', body: '', userId: 1 });


  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault();

    postPost(values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={values.title}
      />
      <TextArea
        name="body"
        onChange={handleChange}
        placeholder="body"
        value={values.body}
      />
      <Button onClick={handleSubmit} bsstyle="primary">Submit</Button>
    </Form>
  );
}

export default PostForm;