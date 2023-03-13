import React from 'react';
import Drawer from '@mui/material/Drawer';
import {
  Box,
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
import { deleteUser } from 'redux/product/product-slice';

export default function DrawerEl({ drawOpen, closeDraw, numOfTtn }) {
  const dispatch = useDispatch();
  const handleClick = ttn => {
    dispatch(deleteUser(ttn));
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
                <ListItem>{item}</ListItem>
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
