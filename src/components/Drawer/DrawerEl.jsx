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

export default function DrawerEl({ drawOpen, closeDraw, numOfTtn }) {
  const handleClick = () => {
    console.log('hello');
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
                <IconButton onClick={handleClick}>
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
