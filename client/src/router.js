import React from 'react';
import Login from './components/Login';
import GorillaList from './components/GorillaList';

const routes = {
  "/": () => <GorillaList />,
  "/login": () => <Login />,
};

export default routes;