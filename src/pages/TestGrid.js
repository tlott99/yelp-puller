import React from 'react'
import {Typography, Grid, Button, Card, CardContent, Paper} from '@mui/material'
import {Link} from 'react-router-dom'
import { People } from '@mui/icons-material'


const TestGrid = () => {
    const people = ["Travis", "Sabra", "Sierra", "Valerie","Derek","Troy"]
    return (
        <>
        <Grid container spacing={2}>
            {
                people.map(
                    (value) => {
                        return (
                            <Grid item xs={6} md={2}>
                                <Card>
                                    <CardContent>
                                        {value}
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }
                )

            }
        </Grid>
        <Typography>I'm the Test Grid</Typography>
        <Button component={Link} to='/search' variant="outlined">Search</Button>
        </>
    )
}
export default TestGrid