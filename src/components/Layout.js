import React from 'react'
import { Typography, Box, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import TestGrid from '../pages/TestGrid'
import MenuIcon from '@mui/icons-material/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from '../pages/Search'


const Layout = () =>{
    return (
      <>
        <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Typography>Im a Layout</Typography>
        <Routes>
          <Route path="/" element={<TestGrid/>}/>
          <Route path="/testgrid" element={<TestGrid/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route></Route>
          <Route></Route>
        </Routes>
        </BrowserRouter>
        </>
      );
}
export default Layout 
