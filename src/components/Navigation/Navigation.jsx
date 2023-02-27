import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
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
  );
}
