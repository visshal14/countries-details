import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchAndFilter from './SearchAndFilter'
import CountriesContainer from './CountriesContainer'
import axios from 'axios'

const Homepage = () => {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [regionValue, setRegionValue] = useState("All")


    async function allCountries() {
        await axios.get("https://restcountries.com/v3.1/all").then((response) => {
            setData(response.data)
        })
    }
    async function searchCountries() {
        if (searchValue === null || searchValue.length < 1) return
        await axios.get(`https://restcountries.com/v3.1/name/${searchValue}`).then((response) => {
            setData(response.data)
        })
    }


    useEffect(() => {
        allCountries()
    }, [])


    useEffect(() => {

        let timeOut = setTimeout(() => {
            if (searchValue === null || searchValue.length < 1) {
                allCountries()
            } else {
                searchCountries()
            }
        }, 500)

        return () => {
            clearTimeout(timeOut)
        }
        // eslint-disable-next-line
    }, [searchValue])


    const filterRegion = async () => {

        await allCountries()
        await searchCountries()
        setData(prev => prev.filter((ele) => ele.region === regionValue))
    }

    useEffect(() => {

        if (regionValue === "All" && (searchValue === null || searchValue.length < 1)) {
            allCountries()
        } else if (regionValue === "All" && !(searchValue === null || searchValue.length < 1)) {
            searchCountries()
        } else if (regionValue !== "All" && (searchValue === null || searchValue.length < 1)) {
            filterRegion()
        } else if (regionValue !== "All" && !(searchValue === null || searchValue.length < 1)) {
            // searchCountries()
            filterRegion()
        }
        // eslint-disable-next-line
    }, [regionValue])

    return (
        <Box sx={{
            minHeight: "100vh",
            bgcolor: "hsl(207, 26%, 17%)",
        }}>

            <Stack sx={{
                py: 10,
                px: 12.5,


            }}>
                <SearchAndFilter searchValue={searchValue} setSearchValue={setSearchValue} regionValue={regionValue} setRegionValue={setRegionValue} />

                <CountriesContainer data={data} />
            </Stack>

        </Box>

    )
}

export default Homepage