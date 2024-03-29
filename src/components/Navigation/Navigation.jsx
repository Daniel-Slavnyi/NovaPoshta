import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Tooltip,
  Badge,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

import { getNumOfTTN } from 'redux/product/product-selector';
import DrawerEl from 'components/Drawer/DrawerEl';
import LanguageTogle from 'components/LanguageTogle/LanguageTogle';

const pages = [
  { name: 'Home', link: '/' },
  { name: 'Offices', link: '/departaments' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawOpen, setDrawOpen] = useState(false);

  const numOfTtn = useSelector(getNumOfTTN);
  const { t } = useTranslation();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = () => {
    setDrawOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <EmailIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NOVA POSHTA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem
                  key={page.name}
                  component={NavLink}
                  to={page.link}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{t(page.name)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <EmailIcon
            sx={{ display: { xs: 'none', sm: 'flex', md: 'none' }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '18px',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NOVAPOSHTA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                key={page.name}
                component={NavLink}
                to={page.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t(page.name)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
              }}
            >
              <LanguageTogle />
              <Tooltip title="Open history">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Badge color="primary" badgeContent={numOfTtn?.length}>
                    <HistoryToggleOffIcon fontSize="large" htmlColor="white" />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map(page => (
                <MenuItem key={page.name} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    component={NavLink}
                    to={page.link}
                  >
                    {t(page.name)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <DrawerEl
        numOfTtn={numOfTtn}
        drawOpen={drawOpen}
        closeDraw={() => {
          setDrawOpen(false);
        }}
      />
    </AppBar>
  );
}
export default ResponsiveAppBar;
