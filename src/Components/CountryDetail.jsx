import { ArrowBack } from '@mui/icons-material'
import { Button, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import data from "../data.json"
import axios from 'axios'
const CountryDetail = () => {

    const { code } = useParams()
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/alpha/${code}`).then((response) => {
            setData(response.data[0])
        })
        // eslint-disable-next-line
    }, [code])



    const backClicked = () => {
        navigate("/")

    }
    return (
        <Stack sx={{
            py: 10,
            px: 12.5,
            bgcolor: "hsl(207, 26%, 17%)",
            alignItems: "flex-start",
            height: "100vh"
        }}>
            <Button startIcon={<ArrowBack sx={{ color: "white" }} />} sx={{
                color: "white",
                bgcolor: "hsl(209, 23%, 22%)",
                px: 1,
                mb: 3
            }} onClick={backClicked}> Back</Button>


            <Grid container >
                <Grid item xxs={12} md={4} pr={3}>
                    <img src={data?.flags?.svg} alt="flag" style={{ objectFit: "contain", width: "100%" }} />
                </Grid>
                <Grid item xxs={12} sm={8} textAlign={"left"} pl={3}>
                    <Typography variant='h5' component="h5" color={"white"}>
                        {data?.name.common}
                    </Typography>
                    <Grid container mt={2}>
                        <Grid item pr={2}>
                            <Typography mb={1} color={"white"}>
                                <strong>Native Name:</strong>
                                {data &&
                                    Object.keys(data?.name?.nativeName).map((ele, i) =>
                                        < >{i === 0 ? "" : ","}{data?.name?.nativeName[ele]?.common}</>
                                    )
                                }
                            </Typography>
                            <Typography mb={1} color={"white"}>
                                <strong>Population:</strong>{data?.population}
                            </Typography>
                            <Typography mb={1} color={"white"}>
                                <strong>Region:</strong>{data?.region}
                            </Typography>
                            <Typography mb={1} color={"white"}>
                                <strong>Sub Region:</strong>{data?.subregion}
                            </Typography>
                            <Typography mb={1} color={"white"}>
                                <strong>Capital:</strong>{data?.capital[0]}
                            </Typography>

                        </Grid>
                        <Grid item px={2}>

                            <Typography color={"white"} mb={1}>
                                <strong>Top Level Domain:</strong>{data?.tld[0]}
                            </Typography>
                            <Typography color={"white"} mb={1}>
                                <strong>Currencies:</strong>
                                {data &&
                                    Object.keys(data?.currencies).map((ele, i) =>
                                        <>{i === 0 ? "" : ","}{data?.currencies[ele]?.name}</>
                                    )
                                }
                            </Typography>
                            <Typography color={"white"} mb={1}>
                                <strong>Languages:</strong>
                                {data &&
                                    Object.keys(data?.languages).map((ele, i) =>
                                        <>{i === 0 ? "" : ","}{data?.languages[ele]}</>
                                    )
                                }
                            </Typography>
                            {/* <Box mb={1} color={"white"} sx={{ display: "flex", alignItems: "center" }}>
                                <strong>Languages:</strong>
                                {data?.languages?.map((e, j) => <Typography sx={{ width: "fit-content" }} key={j}>{`${e?.name}, `}</Typography>
                                )}
                            </Box> */}



                        </Grid>
                    </Grid>

                    {data?.borders?.length > 0 && <Grid container alignItems={"center"}>
                        <Grid item>
                            <Typography color={"white"}>
                                <strong>Border Countries:</strong>
                            </Typography>
                        </Grid>
                        {data?.borders?.map((ele, i) =>

                            <Grid item key={i} sx={{

                                bgcolor: "hsl(209, 23%, 22%)",
                                padding: "5px 20px",
                                borderRadius: "5px",
                                mx: 1
                            }}>
                                <Typography color={"white"}>
                                    {ele}
                                </Typography>
                            </Grid>

                        )}

                    </Grid>}
                </Grid>
            </Grid>



        </Stack>
    )
}

export default CountryDetail