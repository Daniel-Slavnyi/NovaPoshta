import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, CircularProgress, Container, Grid } from '@mui/material';

import ItemOfDepartments from 'components/ItemOfDepartments/ItemOfDepartments';
import { getDepartmentsListByCity } from 'redux/departments/departments-operation';
import { plusNumOfPage } from 'redux/departments/departments-slice';
import {
  getNumOfPage,
  getPaginListOfOffice,
  isLoadingPage,
} from 'redux/departments/departments-selector';

export default function ListOfDepartments() {
  const dispatch = useDispatch();
  const numOfPage = useSelector(getNumOfPage);
  const isLoading = useSelector(isLoadingPage);
  const listOfDepartments = useSelector(getPaginListOfOffice);

  const { t } = useTranslation();

  const handleClick = () => {
    dispatch(plusNumOfPage(1));
    dispatch(
      getDepartmentsListByCity({
        city: listOfDepartments[0].CityDescription,
        num: numOfPage + 1,
      })
    );
  };

  return (
    <>
      <Container>
        <Grid container spacing={4} sx={{ mt: 1, mb: 2 }}>
          {listOfDepartments.map(item => (
            <ItemOfDepartments key={item.SiteKey} item={item} />
          ))}
        </Grid>
        {listOfDepartments.length && (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={isLoading}
            onClick={handleClick}
          >
            {isLoading ? <CircularProgress size={24} /> : t('BtnGetMore')}
          </Button>
        )}
      </Container>
    </>
  );
}
