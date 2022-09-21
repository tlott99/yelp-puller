import React from 'react'
import {Typography, Grid, Button} from '@mui/material'
import {Link} from 'react-router-dom'

const Search = () => {
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
                <Typography variant='h2'>I am The Search Page</Typography>
                </Grid>
            <Grid item xs={6} md={2} lg={1}>Hello</Grid>
            <Grid item xs={6} md={2} lg={1}>Travis</Grid>
            <Grid item xs={6} md={2} lg={1}>Sabra</Grid>
            <Grid item xs={6} md={2} lg={1}>Sierra</Grid>
            <Grid item xs={6} md={2} lg={1}>Valerie</Grid>
        </Grid>
        <Typography>I'm the Test Grid</Typography>
        <Button component={Link} to='/testgrid' variant="outlined">TestGrid</Button>
        </>
    )
}
export default Search