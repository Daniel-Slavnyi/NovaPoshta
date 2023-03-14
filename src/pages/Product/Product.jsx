import { Container } from '@mui/material';
import CardOfProduct from 'components/CardOfProduct/CardOfProduct';
import SearchForm from 'components/SearchForm/SearchForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { getProductTTN } from 'redux/product/product-selector';

export default function Product() {
  const getItems = useSelector(getProductTTN);

  return (
    <>
      <Container>
        <SearchForm getItems={getItems} />
        <CardOfProduct />
      </Container>
    </>
  );
}
