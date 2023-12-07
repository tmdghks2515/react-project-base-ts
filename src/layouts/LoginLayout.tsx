import React from 'react';
import { Outlet } from 'react-router-dom';

function LoginLayout() {
  return (
    <>
      <header>
        <div>로그인</div>
      </header>
      <Outlet />
    </>
  );
}

export default LoginLayout;
