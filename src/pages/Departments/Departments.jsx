import { Container } from '@mui/material';
import ListOfDepartments from 'components/ListOfDepartments/ListOfDepartments';
import SearchDepartmentsForm from 'components/SearchDepartmentsForm/SearchDepartmentsForm';
import React from 'react';

export default function Departments() {
  return (
    <Container>
      <SearchDepartmentsForm />
      <ListOfDepartments />
    </Container>
  );
}
