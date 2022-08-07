import React from 'react';

import Layout from './components/Layout';

import GlobalStyles from './styles/GlobalStyles';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Layout />

      <GlobalStyles />
    </>
  );
}

export default App;
