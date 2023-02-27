import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
