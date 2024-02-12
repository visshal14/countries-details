import { AppBar, Box, Grid, Link, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <Box sx={{
            flexGrow: 1,

        }}>
            <AppBar position="fixed" sx={{
                // py: 1,
                px: 10,
                bgcolor: "hsl(209, 23%, 22%)"
            }}>
                <Toolbar>
                    <Grid container justifyContent={"space-between"} alignItems={"center"}>
                        <Link href="/" underline="none" color="white" variant="h6" sx={{

                        }}>
                            Where in the world?

                        </Link>


                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Navbar