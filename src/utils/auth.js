import axios from 'axios';

export function login({ username, password }) {
  return axios({
    method: 'post',
    url: 'http://localhost:3001/login',
    data: {
      username,
      password,
    }
  }).then(res => {
    return res.data;
  }).catch(error => { return error })
}