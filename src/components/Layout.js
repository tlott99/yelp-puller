import React, {useState, useEffect} from 'react'
import { Typography, Box, AppBar, Toolbar, IconButton, Button, TextField, InputAdornment, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from '../pages/Search'
import SearchIcon from '@mui/icons-material/Search';
// import yelp from '../api/yelp'
import Detail from '../pages/Detail'

const Layout = () =>{
    const [searchText, setSearchText] =useState("Chinese Food")
    const [results, setResults] = useState([])
    const [restId, setRestId] = useState('nothing to see here')
    const [zipCode, setLocationValue] = useState ("84302")
    //let mySearchTest = "I'm here."

   // const areaCode = locationInput
    const searchApi = async (term, zip) => {
      // const response = await yelp(areaCode, term)
      // console.log(response.data.businesses)
      // setResults(response.data.businesses)
      // const location = await zipCode
      // const zip = location || "24416"
      const response2 = await fetch(`/api/yelp?term=${term}&location=${zip}`)
      const data = await response2.json()
      //console.log("hi", data)
      setResults(data.businesses)
    }

    const doSearch= (e) => {
      setSearchText(e.target.value)
      searchApi(e.target.value, zipCode)
    }
    const setLocation= (e) =>{
      setLocationValue(e.target.value)
      searchApi(searchText, e.target.value)
    }
    
      useEffect(() => {
          searchApi('Chinese Food', zipCode)
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
              <TextField 
                onKeyPress={
                 (e) => {
                 if (e.key === "Enter")
                  setLocation(e)
                 }
                }
              id="location" 
              label="Location(Zip Code)" 
              variant='outlined' />
              <Button 
                id = "setZip" 
                variant='outlined' 
                color="inherit">Set Zip</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Typography variant="h2">Your search results for "{searchText}"</Typography>
        <Typography variant="h2">in zip code "{zipCode}"</Typography>
        <Routes>
          <Route 
          exact 
          path="/" 
          element={<Search searchResults={results} setRestId={setRestId}/>}
          />

          <Route 
          exact 
          path="/search" 
          element={<Search searchResults={results} setRestId={setRestId}/>}
          />

          <Route 
          exact 
          path="/detail" 
          element={<Detail restId={restId}/>}
          />

        </Routes>
        </BrowserRouter>
        </Paper>
        </>
      );
}
export default Layout 
