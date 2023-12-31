import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Page() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Page;
