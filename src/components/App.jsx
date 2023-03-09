import Departments from 'pages/Departments/Departments';
import Layout from 'pages/Layout/Layout';
import Product from 'pages/Product/Product';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Product />} />
          <Route path="/departaments" element={<Departments />} />
        </Route>
      </Routes>
    </>
  );
};
