import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    navigate(token ? '/newProfile' : '/signIn');
  }, []);
  return <div></div>;
};
