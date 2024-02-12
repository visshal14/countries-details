import { Search } from '@mui/icons-material'
import { FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const SearchAndFilter = ({ searchValue, setSearchValue, setRegionValue }) => {



    return (
        <Grid container justifyContent={"space-between"}>
            <TextField id="outlined-basic"
                label=""
                sx={{
                    bgcolor: "hsl(209, 23%, 22%)",
                    maxWidth: "500px",
                    width: "30%",
                    borderRadius: 2,
                    color: "white",

                    "& .MuiInputBase-input": {
                        color: "white"
                    },
                    "& .MuiOutlinedInput-input:focus": {
                        outline: "none"
                    }

                }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
                variant="outlined"
                placeholder='Search for a country...'
                InputProps={{
                    startAdornment: <InputAdornment position="start">
                        <IconButton>
                            <Search sx={{
                                color: "white"
                            }} />
                        </IconButton>

                    </InputAdornment>,
                }}
            />


            <FormControl sx={{
                color: "white",
                width: "200px",

                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black"
                }


            }}>
                <InputLabel
                    sx={{
                        color: 'white',

                        "&.Mui-focused": {
                            color: "white"
                        },

                    }}
                // shrink={false}
                >

                    Filter by Region</InputLabel>
                <Select
                    // labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    // // value={age}
                    // label="Age"

                    label='Filter By Region'
                    // onChange={handleChange}
                    sx={{
                        color: "white",
                        borderColor: "white",
                        bgcolor: "hsl(209, 23%, 22%)",
                        "& .MuiSelect-icon": {
                            color: "white"
                        },
                        "& .MuiSelect-select": {
                            textAlign: "left"
                        },
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                            border: 0,
                        },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                            border: "1px solid black",
                        },

                    }}
                    MenuProps={{
                        sx: {
                            // bgcolor: "pink"
                            "&& .MuiMenu-paper": {
                                bgcolor: "hsl(209, 23%, 22%)",
                            },
                            "&& .MuiMenuItem-root": {
                                color: "white"
                            }
                        }
                    }}
                    defaultValue="All"
                    onChange={(e) => setRegionValue(e.target.value)}
                >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"Africa"}>Africa</MenuItem>
                    <MenuItem value={"Americas"}>America</MenuItem>
                    <MenuItem value={"Asia"}>Asia</MenuItem>
                    <MenuItem value={"Europe"}>Europe</MenuItem>
                    <MenuItem value={"Oceania"}>Oceania</MenuItem>

                </Select>
            </FormControl>




        </Grid >
    )
}

export default SearchAndFilter