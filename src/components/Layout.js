import React, {useState, useEffect} from 'react'
import { Typography, Box, AppBar, Toolbar, IconButton, Button, TextField, InputAdornment, Paper } from '@mui/material';
import TestGrid from '../pages/TestGrid'
import MenuIcon from '@mui/icons-material/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from '../pages/Search'
import SearchIcon from '@mui/icons-material/Search';
import yelp from '../api/yelp'

const Layout = () =>{
    const [searchText, setSearchText]     =useState("Your Search Results")
    const [results, setResults] = useState([])
    let mySearchTest = "I'm here."

    
    const searchApi = async (term) => {
      const response = await yelp('24416', term)
      console.log(response.data.businesses)
      setResults(response.data.businesses)
    }

    const doSearch= (e) => {
      setSearchText(e.target.value)
      searchApi(e.target.value)
    }
    
    useEffect(() => {
        searchApi('Chinese Food')
    } , [])

    return (
      <>
      <Paper sx={{backgroundColor : "#eeeeee", pb: 2}}>
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
                <TextField 
                onKeyPress={
                  (e) => {
                    if (e.key ==="Enter")
                    doSearch(e)
                  }
                }
                label="Search"
                variant='outlined'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
                />
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Typography variant="h2">{searchText}</Typography>
        <Routes>
          <Route path="/" element={<Search searchResults={results}/>}/>
          <Route path="/testgrid" element={<TestGrid/>}/>
          <Route path="/search" element={<Search searchResults={results}/>}/>
        </Routes>
        </BrowserRouter>
        </Paper>
        </>
      );
}
export default Layout 
