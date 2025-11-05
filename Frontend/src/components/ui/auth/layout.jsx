import React from 'react'
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div>
        <h1>This is auth page.</h1>
        <Outlet/>
    </div>
  )
}

export default AuthLayout;