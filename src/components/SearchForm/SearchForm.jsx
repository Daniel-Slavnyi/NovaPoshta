import { Formik, Form, Field } from 'formik';
import { TextField, Button, Container, Alert } from '@mui/material';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { getProductByTtn } from 'redux/product/product-operation';
import { getProductTTN } from 'redux/product/product-selector';

const schema = Yup.object().shape({
  ttn: Yup.string()
    .matches(/^\d+$/, 'ТТН може містити тільки цифри')
    .length(14, 'ТТН має містити рівно 14 цифр')
    .required(),
});

const initialValues = {
  ttn: '',
};

export default function SearchForm() {
  const dispatch = useDispatch();
  const getItems = useSelector(getProductTTN);
  console.log(getItems);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(getProductByTtn(values.ttn));
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
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
