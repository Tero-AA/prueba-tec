import React from 'react';
import App from './App';
import LoginForm from '../screens/LoginForm';
import RegisterForm from '../screens/RegisterForm';
import Home from '../screens/Home';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders login without crashing', () => {
  shallow(<LoginForm />);
});

it('renders login without crashing', () => {
  shallow(<RegisterForm />);
});

it('renders login without crashing', () => {
  shallow(<Home />);
});
