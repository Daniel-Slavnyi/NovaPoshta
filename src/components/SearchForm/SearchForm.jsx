import { Formik, Form, Field, useFormikContext } from 'formik';
import { TextField, Button, Container } from '@mui/material';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { getProductByTtn } from 'redux/product/product-operation';
import { getProductTTN } from 'redux/product/product-selector';
import { addToStory } from 'redux/product/product-slice';
import { useEffect, useState } from 'react';

const schema = Yup.object().shape({
  ttn: Yup.string()
    .matches(/^\d+$/, 'ТТН може містити тільки цифри')
    .length(14, 'ТТН має містити рівно 14 цифр')
    .required(),
});

export default function SearchForm({ getItems }) {
  console.log('1', getItems.number);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(getProductByTtn(values.ttn));
    dispatch(addToStory(values.ttn));
  };

  console.log('2', getItems.number);

  return (
    <Container>
      <Formik
        initialValues={{ ttn: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnChange={true}
      >
        {({ handleSubmit }) => (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '20px',
            }}
            onSubmit={handleSubmit}
          >
            <p>{getItems.Number}</p>
            <Field name="ttn">
              {({ field, meta }) => (
                <TextField
                  label="TTN"
                  {...field}
                  error={meta.touched && Boolean(meta.error)}
                  helperText={
                    meta.touched && meta.error
                      ? 'ТТН має містити рівно 14 цифр'
                      : ''
                  }
                  style={{
                    borderBottom:
                      meta.touched && meta.error ? '2px solid red' : 'none',
                  }}
                />
              )}
            </Field>
            <Button type="submit" variant="contained">
              Get status TTN
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
