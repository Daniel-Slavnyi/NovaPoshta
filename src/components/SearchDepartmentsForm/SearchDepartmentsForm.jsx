import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Box, Button, CircularProgress, TextField } from '@mui/material';

import { getDepartmentsByCity } from 'redux/departments/departments-operation';
import { isLoadingPage } from 'redux/departments/departments-selector';

export default function SearchDepartmentsForm() {
  const dispatch = useDispatch();

  const isLoading = useSelector(isLoadingPage);

  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      city: '',
    },
    validationSchema: Yup.object().shape({
      city: Yup.string()
        .matches(/^[\p{L}\s-]+$/u, 'Поле может може приймати тільки літери')
        .required('Поле має містити назву міста'),
    }),
    onSubmit: value => {
      dispatch(getDepartmentsByCity({ city: value.city }));
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
      }}
    >
      <TextField
        fullWidth
        label="City"
        id="city"
        name="city"
        variant="outlined"
        value={formik.values.city}
        onChange={formik.handleChange}
        helperText={formik.touched && formik.errors ? formik.errors.city : ''}
        error={formik.touched && Boolean(formik.errors.city)}
      />
      <Button fullWidth type="submit" variant="contained">
        {isLoading ? <CircularProgress size={24} /> : t('BtnOffice')}
      </Button>
    </Box>
  );
}
