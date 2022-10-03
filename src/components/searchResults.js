import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material'
import React from 'react'
const SearchResults = ({food, title}) =>{
    return(
        <>  
          {
            //ternary
            (food.length > 0) ? (
              <Typography variant="h3">{title}</Typography>
            ) : (
              <></>
            )            
          }  
            <Grid container spacing={2} sx={{pt : 2}}>
                {
                    food.map(
                       (value, index) => {
                           return (
                               <Grid key ={index} item xs={6} md={2}>
                                   <Card>
                                   <Card sx={{ maxWidth: 345 }}>
                                    {/* <CardContent>
                                      {value.name}
                                    </CardContent> */
                                      <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                          component="img"
                                          height="140"
                                          image={value.image_url}
                                          alt ="green iguana"
                                        />
                                        <CardContent>
                                          <Typography gutterBottom variant="h5" component="div">
                                            {value.name}
                                          </Typography>
                                          <Typography variant="body2" color="text.secondary">
                                            Address: {value.location.address1}<br/>
                                            {value.location.city}, {value.location.state}<br/>
                                            Phone Number: {value.display_phone}<br/>
                                            <a href={""+value.url}>Please don't click me ;)</a>
                                          </Typography>
                                        </CardContent>
                                        <CardActions>
                                          <Button size="small">Share</Button>
                                          <Button size="small">Learn More</Button>
                                        </CardActions>
                                      </Card>
                                    }
                                  </Card>
                                  </Card>
                               </Grid>
                          )
                      }
                   )
               }
            </Grid>
        </>
    )

}

export default SearchResults