import { Card, CardContent, Divider, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { getProductTTN } from 'redux/product/product-selector';

export default function CardOfProduct() {
  const productByTtn = useSelector(getProductTTN);
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography sx={{ mt: 3 }}>
          Delivery status: {productByTtn?.Status}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 3 }}>
          Sender: {productByTtn?.WarehouseSender}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 3 }}>
          Recipient: {productByTtn?.WarehouseRecipient}
        </Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}
