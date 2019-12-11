import React, { createContext, useState, useEffect } from 'react';
import { login } from '../utils/auth';

export const Context = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    login('/verify')
  }, []);
  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  )
}