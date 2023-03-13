import { Formik, Form, Field } from 'formik';
import { TextField, Button, Container, Alert } from '@mui/material';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

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

  const handleSubmit = (values, { resetForm }) => {
    console.log('I am Form', values);
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
                  label="ТТН"
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
