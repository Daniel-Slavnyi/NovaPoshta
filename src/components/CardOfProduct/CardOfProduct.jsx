import { Card, CardContent, Divider, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProductTTN } from 'redux/product/product-selector';

export default function CardOfProduct() {
  const { t } = useTranslation();

  const productByTtn = useSelector(getProductTTN);
  return (
    <>
      {productByTtn && (
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography sx={{ mt: 3 }}>
              {t('Status')}: {productByTtn?.Status}
            </Typography>
            <Divider />
            <Typography sx={{ mt: 3 }}>
              {t('Sender')}: {productByTtn?.WarehouseSender}
            </Typography>
            <Divider />
            <Typography sx={{ mt: 3 }}>
              {t('Sender')}: {productByTtn?.WarehouseRecipient}
            </Typography>
            <Divider />
          </CardContent>
        </Card>
      )}
    </>
  );
}
