import React from 'react'
//import {Typography, Grid, Button, Card, CardContent, Paper} from '@mui/material'
//import {Link} from 'react-router-dom'
import SearchResults from '../components/searchResults'

const Search = ({searchResults, setRestId}) => {
    //const people = ["Travis", "Sabra", "Sierra", "Valerie","Derek","Troy"]
    const cheapFood = searchResults.filter((value) => value.price === "$")
    const moderateFood = searchResults.filter((value) => value.price === "$$")
    const expensiveFood = searchResults.filter((value) => value.price === "$$$")
    return (
        <>
        <SearchResults food={cheapFood} title={"Cheap Food"} setRestId={setRestId}/>
        <SearchResults food={moderateFood} title={"Moderately Priced Food"} setRestId={setRestId}/>
        <SearchResults food={expensiveFood} title={"Expensive Food"} setRestId={setRestId}/>
        </>
    )
}
export default Search