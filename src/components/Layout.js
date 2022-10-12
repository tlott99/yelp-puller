import React, {useState} from 'react'
import { Typography, Box, AppBar, Toolbar, IconButton, Button, TextField, InputAdornment, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from '../pages/Search'
import SearchIcon from '@mui/icons-material/Search';
import yelp from '../api/yelp'
import Detail from '../pages/Detail'

const Layout = () =>{
    const [searchText, setSearchText] =useState("Your Search Results For")
    const [results, setResults] = useState([])
    const [restId, setRestId] = useState('nothing to see here')
    const [areaCode, setLocationValue] = useState ()
    
    //let mySearchTest = "I'm here."

   // const areaCode = locationInput

    const searchApi = async (term) => {
      const response = await yelp(areaCode, term)
      console.log(response.data.businesses)
      setResults(response.data.businesses)

      const response2 = await fetch("/api/yelp")
      const data = await response2.json()
      console.log(data)
    }

    const doSearch= (e) => {
      setSearchText(e.target.value)
      searchApi(e.target.value)
    }
    const setLocation= (e) =>{
      setLocationValue(e.target.value)
    }
    
      // useEffect(() => {
      //     searchApi('Chinese Food')
      // } , [])

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
                 if (e.key ==="Enter")
                  setLocation(e)
                 }
                }
              id="location" 
              label="Location(Area Code)" 
              variant="outlined" />
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Typography variant="h2">{searchText}</Typography>
        <Typography variant="h2">{areaCode}</Typography>
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
