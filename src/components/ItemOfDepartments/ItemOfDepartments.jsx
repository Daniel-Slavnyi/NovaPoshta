import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

export default function ItemOfDepartments({ item }) {
  const [isCardClicked, setIsCardClicked] = useState(true);

  const handleCardClick = () => {
    setIsCardClicked(!isCardClicked);
  };

  const typographyStyle = {
    textOverflow: isCardClicked ? 'ellipsis' : 'unset',
    whiteSpace: isCardClicked ? 'nowrap' : 'unset',
    overflow: isCardClicked ? 'hidden' : 'unset',
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: { xs: '100%', sm: '345' } }}>
        <CardActionArea onClick={handleCardClick}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={typographyStyle}
            >
              {item.CityDescription}
            </Typography>
            <Typography
              sx={typographyStyle}
              variant="body2"
              color="text.secondary"
            >
              <b>Description:</b> {item.Description}
            </Typography>
            <Typography
              sx={typographyStyle}
              variant="body2"
              color="text.secondary"
            >
              <b>Time of work:</b>/ Friday {item.Delivery.Friday}/ Monday{' '}
              {item.Delivery.Monday}/ Saturday {item.Delivery.Saturday}/ Sunday{' '}
              {item.Delivery.Sunday}/ Thursday {item.Delivery.Thursday}/ Tuesday{' '}
              {item.Delivery.Tuesday}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
