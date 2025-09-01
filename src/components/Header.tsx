import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Person,
  Language,
  Public,
  AccountCircle,
} from '@mui/icons-material';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuAnchor, setAccountMenuAnchor] = useState<null | HTMLElement>(null);
  const [countryMenuAnchor, setCountryMenuAnchor] = useState<null | HTMLElement>(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null);

  const navigationItems = [
    'Flights', 'Hotels', 'Holidays', 'Trains', 'Buses', 'Cabs', 'Visa', 'Forex', 'More'
  ];

  const handleAccountMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAccountMenuAnchor(event.currentTarget);
  };

  const handleCountryMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCountryMenuAnchor(event.currentTarget);
  };

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAccountMenuAnchor(null);
    setCountryMenuAnchor(null);
    setLanguageMenuAnchor(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={2}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            {/* <Plane sx={{ fontSize: 32, color: 'white' }} /> */}
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                color: 'white',
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              FlightBooker
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box display="flex" alignItems="center" gap={3}>
              {navigationItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  sx={{
                    color: 'white',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}

          {/* Right Side Controls */}
          <Box display="flex" alignItems="center" gap={1}>
            {!isMobile && (
              <>
                <IconButton
                  color="inherit"
                  onClick={handleCountryMenuOpen}
                  sx={{ color: 'white' }}
                >
                  <Public fontSize="small" />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={handleLanguageMenuOpen}
                  sx={{ color: 'white' }}
                >
                  <Language fontSize="small" />
                </IconButton>
              </>
            )}
            
            <Button
              color="inherit"
              startIcon={<AccountCircle />}
              onClick={handleAccountMenuOpen}
              sx={{
                color: 'white',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              {isMobile ? '' : 'Login / Create Account'}
            </Button>

            {isMobile && (
              <IconButton
                color="inherit"
                onClick={toggleMobileMenu}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer anchor="right" open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item} onClick={toggleMobileMenu}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
            <Divider sx={{ my: 1 }} />
            <ListItem onClick={toggleMobileMenu}>
              <ListItemText primary="Country & Currency" />
            </ListItem>
            <ListItem onClick={toggleMobileMenu}>
              <ListItemText primary="Language" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Account Menu */}
      <Menu
        anchorEl={accountMenuAnchor}
        open={Boolean(accountMenuAnchor)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        <MenuItem onClick={handleMenuClose}>Create Account</MenuItem>
        <MenuItem onClick={handleMenuClose}>My Bookings</MenuItem>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Menu>

      {/* Country Menu */}
      <Menu
        anchorEl={countryMenuAnchor}
        open={Boolean(countryMenuAnchor)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleMenuClose}>🇺🇸 United States (USD)</MenuItem>
        <MenuItem onClick={handleMenuClose}>🇮🇳 India (INR)</MenuItem>
        <MenuItem onClick={handleMenuClose}>🇬🇧 United Kingdom (GBP)</MenuItem>
        <MenuItem onClick={handleMenuClose}>🇨🇦 Canada (CAD)</MenuItem>
      </Menu>

      {/* Language Menu */}
      <Menu
        anchorEl={languageMenuAnchor}
        open={Boolean(languageMenuAnchor)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleMenuClose}>English</MenuItem>
        <MenuItem onClick={handleMenuClose}>हिंदी</MenuItem>
        <MenuItem onClick={handleMenuClose}>বাংলা</MenuItem>
        <MenuItem onClick={handleMenuClose}>தமிழ்</MenuItem>
      </Menu>
    </>
  );
};

export default Header;