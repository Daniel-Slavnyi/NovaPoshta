import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Перевірити ТТН</NavLink>
            </li>
            <li>
              <NavLink to="departaments">Список відділень</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
