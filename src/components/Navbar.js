import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { downloadCV } from '../utils/Utilities';

const styles = {
  appBar: {
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: "'ZapfHumnst BT', sans-serif",
    position: 'sticky',
    top: 0,
    zIndex: 1100,
  },
  toolbar: {
    justifyContent: 'flex-end',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    fontFamily: "'ZapfHumnst BT', sans-serif",
  },
  navButton: {
    position: 'relative',
    textTransform: 'none',
    fontFamily: "'ZapfHumnst BT', sans-serif",
    fontSize: 16,
    color: 'inherit',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: '2px',
      bottom: 0,
      left: 0,
      backgroundColor: '#007bff',
      transformOrigin: 'left',
      transition: 'transform 0.3s ease',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
    },
  },
  divider: {
    height: 24,
    borderLeft: '1px solid #ccc',
    mx: 1,
  },
  downloadButton: {
    backgroundColor: '#0f172a',
    textTransform: 'none',
    borderRadius: '999px',
    fontWeight: 'bold',
    fontFamily: "'ZapfHumnst BT', sans-serif",
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.3s ease',
    backgroundImage: 'linear-gradient(to right, #007bff 50%, #0f172a 50%)',
    backgroundSize: '200% 100%',
    backgroundPosition: 'right bottom',
    '&:hover': {
      backgroundPosition: 'left bottom',
      color: '#fff',
    },
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2,
  },
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:620px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = ['About', 'Work', 'Testimonials', 'Contact'];

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250, p: 2 }}>
                  <Box sx={styles.drawerHeader}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Menu
                    </Typography>
                    <IconButton onClick={() => setDrawerOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Divider />
                  <List>
                    {navItems.map((text, index) => (
                      <React.Fragment key={text}>
                        <ListItem button onClick={() => setDrawerOpen(false)}>
                          <ListItemText primary={text} />
                        </ListItem>
                        {index < navItems.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                    <Divider sx={{ my: 2 }} />
                    <ListItem>
                      <Button variant="contained" fullWidth sx={styles.downloadButton} onClick={downloadCV}>
                        Download CV
                      </Button>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={styles.navContainer}>
              {navItems.map((text) => (
                <Button key={text} color="inherit" sx={styles.navButton}>
                  {text}
                </Button>
              ))}
              <Box sx={styles.divider} />
              <Button variant="contained" sx={styles.downloadButton} onClick={downloadCV}>
                Download CV
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
