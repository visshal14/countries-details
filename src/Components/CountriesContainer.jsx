import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
// import data from "../data.json"
import { useNavigate } from 'react-router-dom'
const CountriesContainer = ({ data }) => {

    const navigate = useNavigate()

    const clicked = (data) => () => {
        navigate("/" + data)
        // console.log(data)
    }
    return (

        <Grid container mt={2}>

            {data?.map((ele, i) =>


                <Grid key={i} item xxs={12} sm={4} md={3} lg={3} p={1} minWidth={"200px"} >
                    <Card
                        sx={{
                            bgcolor: "hsl(209, 23%, 22%)",
                            color: "white",
                            minHeight: "330px"
                        }}
                        onClick={clicked(ele.cca2)}
                    >
                        <CardMedia
                            sx={{ height: 140 }}
                            image={ele?.flags?.png}
                            title={ele?.cioc}
                        />
                        <CardContent sx={{
                            color: "white",
                            "& .MuiTypography-root": {
                                color: "white",
                                textAlign: "left"
                            }
                        }}>
                            <Typography gutterBottom variant="h5" component="h5" >
                                {ele?.name.common}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Population:</strong>
                                {ele?.population}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Region:</strong>
                                {ele?.region}

                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Capital:</strong>
                                {ele?.capital}

                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>

            )
            }


        </Grid>
    )
}

export default CountriesContainer