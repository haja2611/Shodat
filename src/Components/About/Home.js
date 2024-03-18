import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import about from "../../Assets/about.png"
import innovate from "../../Assets/about-innovate.png"
import Leadership from './Leadership'
function Home() {
    return (
        <Grid>
            <Box sx={{
                backgroundImage: `url(${about})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "75vh",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <Typography variant='h2' sx={{
                    color: "White", fontWeight: "bold",
                    paddingTop: "14%", paddingLeft: "4%"
                }}>About Shodat</Typography>
            </Box>
            <Box sx={{ height: "120vh", background: "#F0F5FF" }}>
                <Grid item xs={12} lg={12}>
                    <Typography sx={{ paddingTop: "6%", paddingLeft: "4%", fontSize: "44px", fontWeight: "bold" }}>Innovating Insights,</Typography>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Typography sx={{ paddingTop: "0.1%", paddingLeft: "4%", fontSize: "44px", fontWeight: "bold" }}>Accelerating Growth</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography sx={{ paddingTop: "1%", paddingLeft: "4%", color: "#57647C" }}>
                        In the heart of Silicon Valley, Shodat Inc. thrives at the intersection of innovation,
                    </Typography>
                    <Typography sx={{ paddingLeft: "4%", color: "#57647C" }}> data, and artificial intelligence. As a leading force in the tech landscape, we've </Typography>
                    <Typography sx={{ paddingLeft: "4%", color: "#57647C" }}>dedicated ourselves to driving the future of business through advanced data analytics</Typography>
                    <Typography sx={{ paddingLeft: "4%", color: "#57647C" }}> and cutting-edge AI solutions.</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography sx={{ paddingTop: "2%", paddingLeft: "4%", color: "#57647C" }}>
                        Expert in building data analytics & AI applications using cloud based compute,
                    </Typography>
                    <Typography sx={{ paddingLeft: "4%", color: "#57647C" }}>network and storage platforms for Silicon Valley giants like Paypal, Google, Cisco, </Typography>
                    <Typography sx={{ paddingLeft: "4%", color: "#57647C" }}>Yahoo!, Symantec, and also Japanese conglomerates that include manufacturing,</Typography>
                    <Typography sx={{ paddingLeft: "4%", color: "#57647C" }}>automotive, trading and banking multinationals.   </Typography>
                </Grid>
                <Box sx={{ backgroundColor: "#FFFFFF", marginLeft: "54%", height: "60vh", width: "38%", marginTop: "-26%" }}>
                </Box>
                <Box sx={{
                    backgroundImage: `url(${innovate})`,
                    backgroundRepeat: "no-repeat",
                    width: "34%",
                    height: "52vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginLeft: "56%",
                    marginTop: "-27%"
                }}>
                </Box>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Box sx={{
                        backgroundColor: "#340D73", marginLeft: "4%", height: "35vh", width: "53%",
                        marginTop: "8%", borderRadius: "10px",
                    }}>
                        <Typography sx={{
                            marginLeft: "6%", color: "white", fontSize: "27px",
                            fontWeight: "bold", paddingTop: "6%"}}>Vision</Typography>
                        <Typography sx={{marginLeft:"6%", color:"white", marginTop:"2%"}}>Our vision is to illuminate the path to a smarter and more data-driven world. We aspire to be</Typography>
                        <Typography sx={{marginLeft:"6%", color:"white"}}> the guiding light in the realm of AI and Data Analytics, leading businesses and individuals </Typography>
                        <Typography  sx={{marginLeft:"6%", color:"white"}}>towards a future where data is more than just information it's a strategic asset that fuels</Typography>
                        <Typography sx={{marginLeft:"6%", color:"white"}}> innovation, informs decisions, and transforms the way we operate.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Box sx={{
                        backgroundColor: "#F4BE00", marginLeft: "59%", height: "35vh", width: "32%",
                        marginTop: "-17%", borderRadius: "10px",
                    }}>
                        <Typography sx={{
                            marginLeft: "9%", color: "black", fontSize: "27px",
                            fontWeight: "bold", paddingTop: "10%"}}>Misson</Typography>
                        <Typography sx={{marginLeft:"9%", color:"black", marginTop:"2%"}}>To leverage the transformative power of AI and </Typography>
                        <Typography sx={{marginLeft:"9%", color:"black"}}> data analytics contributing to a smarter, more  </Typography>
                        <Typography  sx={{marginLeft:"9%", color:"black"}}>insightful, and more connected world for our</Typography>
                        <Typography sx={{marginLeft:"9%", color:"black"}}>  clients and society.</Typography>
                    </Box>
                </Grid>
            </Box>
            <Leadership/>
        </Grid>
    )
}

export default Home
