import { Container } from '@mui/material';
import CardOfProduct from 'components/CardOfProduct/CardOfProduct';
import SearchForm from 'components/SearchForm/SearchForm';
import React from 'react';

export default function Product() {
  return (
    <>
      <Container>
        <SearchForm />
        <CardOfProduct />
      </Container>
    </>
  );
}
