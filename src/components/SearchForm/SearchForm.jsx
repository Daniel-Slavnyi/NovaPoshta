import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Box, Button, CircularProgress, TextField } from '@mui/material';

import { getProductByTtn } from 'redux/product/product-operation';
import { addToStory } from 'redux/product/product-slice';
import { getProductTTN, isLoadingAction } from 'redux/product/product-selector';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchForm() {
  const dispatch = useDispatch();
  const getItems = useSelector(getProductTTN);
  const isLoading = useSelector(isLoadingAction);

  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      ttn: '',
    },
    validationSchema: Yup.object().shape({
      ttn: Yup.string()
        .matches(/^\d+$/, 'ТТН може містити тільки цифри')
        .length(14, 'ТТН має містити рівно 14 цифр')
        .required('ТТН має містити номер'),
    }),
    onSubmit: value => {
      dispatch(getProductByTtn(value.ttn));
      dispatch(addToStory(value.ttn));
    },
  });

  useEffect(() => {
    if (!getItems?.Number) {
      return;
    }

    formik.setFieldValue('ttn', getItems?.Number);
    formik.setValues({ ttn: getItems?.Number });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems]);

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
        label="TTN"
        id="ttn"
        name="ttn"
        variant="outlined"
        value={formik.values.ttn}
        onChange={formik.handleChange}
        helperText={formik.touched && formik.errors ? formik.errors.ttn : ''}
        error={formik.touched && Boolean(formik.errors.ttn)}
      />
      <Button fullWidth type="submit" variant="contained" disabled={isLoading}>
        {isLoading ? <CircularProgress size={24} /> : t('BtnTtn')}
      </Button>
      <ToastContainer />
    </Box>
  );
}
