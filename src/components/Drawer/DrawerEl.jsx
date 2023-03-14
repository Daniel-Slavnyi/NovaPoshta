import React from 'react';
import Drawer from '@mui/material/Drawer';
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HistoryEduSharpIcon from '@mui/icons-material/HistoryEduSharp';
import RestoreFromTrashSharpIcon from '@mui/icons-material/RestoreFromTrashSharp';
import { useDispatch } from 'react-redux';
import { deleteUser, addNum } from 'redux/product/product-slice';
import { getProductByTtn } from 'redux/product/product-operation';

export default function DrawerEl({ drawOpen, closeDraw, numOfTtn }) {
  const dispatch = useDispatch();
  const handleClick = ttn => {
    dispatch(deleteUser(ttn));
  };

  const getInfoProduct = ttn => {
    dispatch(addNum(ttn));
    dispatch(getProductByTtn(ttn));
  };

  return (
    <>
      <Drawer anchor="right" open={drawOpen} onClose={closeDraw}>
        <List sx={{ width: { xs: '200px', sm: '400px' } }}>
          <ListItem>
            <ListItemIcon>
              <HistoryEduSharpIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
          <Divider />
          {!numOfTtn.length ? (
            <ListItem>Your history is empty</ListItem>
          ) : (
            numOfTtn.map(item => (
              <Box key={item} sx={{ display: 'flex' }}>
                <Button
                  onClick={() => {
                    getInfoProduct(item);
                  }}
                >
                  {item}
                </Button>
                <IconButton
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  <RestoreFromTrashSharpIcon />
                </IconButton>
              </Box>
            ))
          )}
        </List>
      </Drawer>
    </>
  );
}
