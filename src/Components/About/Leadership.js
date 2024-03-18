import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Leader from "../../Assets/leader.png"
import Footer from "../Footer/Footer"
function Leadership() {
    return (
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box height="120vh">
                <Box sx={{
                    background: 'linear-gradient(122.47deg, #340D73 0.1%, #F3D157 20.54%,#F3D157 20.54%)'
                    , marginLeft: "4%", height: "60vh", width: "38%", marginTop: "5%"
                }}>
                </Box>
                <Box sx={{
                    backgroundImage: `url(${Leader})`,
                    backgroundRepeat: "no-repeat",
                    width: "35%",
                    height: "53vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginLeft: "5.5%",
                    marginTop: "-27%"
                }}>
                </Box>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography sx={{
                        marginLeft: "50%", marginTop: "-27%", color: "#340D73",
                        fontSize: "18px", fontWeight: "bold"
                    }}>LEADERSHIP</Typography>
                    <Typography sx={{ marginLeft: "50%", marginTop: "1%" }}>We offer an extensive set of digital solutions that power applications & services </Typography>
                    <Typography sx={{ marginLeft: "50%" }}>enabling companies & organizations to deliver best user experiences to their </Typography>
                    <Typography sx={{ marginLeft: "50%" }}>customers & employees.</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Typography sx={{ marginLeft: "50%", marginTop: "2%" }}>We are a company of seasoned experts with proven industry experience in building </Typography>
                    <Typography sx={{ marginLeft: "50%" }}>data analytics & AI applications using cloud based compute, network and storage </Typography>
                    <Typography sx={{ marginLeft: "50%" }}>platforms for Silicon Valley giants like Paypal, Google, Cisco, Yahoo!, Symantec, and </Typography>
                    <Typography sx={{ marginLeft: "50%" }}>also Japanese conglomerates that include manufacturing,automotive, trading and </Typography>
                    <Typography sx={{ marginLeft: "50%" }}>banking multinationals.</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography sx={{ marginLeft: "50%", marginTop: "2%" }}>Headquartered in Sunnyvale, California USA and with center of excellence centers in </Typography>
                    <Typography sx={{ marginLeft: "50%" }}>India, our partnerships with technology solution providers across US, UK and Japan </Typography>
                    <Typography sx={{ marginLeft: "50%" }}>help us deliver quick and robust  solutions for clients across the globe.</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{
                        background: "#F4F6FF",
                        width: "18%",
                        height: "28vh",
                        marginTop: "12%",
                        marginLeft: "4%",
                        borderRadius: "10px"
                    }}>
                        <Typography sx={{ fontSize: "16px", fontWeight: "bold", paddingTop: "8%", textAlign: "center", color: "#666666" }}>REPEATED CLIENTS IN OVER</Typography>
                        <Typography sx={{ color: "#340D73", fontSize: "65px", fontWeight: "bold", paddingTop: "-7%", textAlign: "center" }}>10</Typography>
                        <Typography sx={{ fontSize: "16px", fontWeight: "bold", paddingTop: "1%", textAlign: "center", color: "#666666" }}>COUNTRIES</Typography>
                    </Box>
                    <Box sx={{
                        background: "#F4F6FF",
                        width: "18%",
                        height: "28vh",
                        marginTop: "-13%",
                        marginLeft: "27%",
                        borderRadius: "10px"
                    }}>
                        <Typography sx={{ fontSize: "16px", fontWeight: "bold", paddingTop: "8%", textAlign: "center", color: "#666666" }}>REVENUE GENERATED IN</Typography>
                        <Typography sx={{ fontSize: "16px", fontWeight: "bold", paddingTop: "1%", textAlign: "center", color: "#666666" }}>US FROM FORTUNE 500 </Typography>
                        <Typography sx={{ fontSize: "16px", fontWeight: "bold", paddingTop: "1%", textAlign: "center", color: "#666666" }}>COMPANIES</Typography>
                        <Typography sx={{ fontSize: "56px", fontWeight: "bold", paddingTop: "4%", textAlign: "center", color: "#340D73" }}>80%</Typography>
                    </Box>
                    <Box sx={{
                        background: "#F4F6FF",
                        width: "18%",
                        height: "28vh",
                        marginTop: "-13%",
                        marginLeft: "50%",
                        borderRadius: "10px"
                    }}>
                        <Typography sx={{ fontSize: "16px", fontWeight: "bold", paddingTop: "8%", textAlign: "center", color: "#666666" }}>GLOBAL OFFICES &</Typography>
                        <Typography  sx={{ fontSize: "16px", fontWeight: "bold", paddingTop: "1%", textAlign: "center", color: "#666666" }}>PARTNERSHIP IN</Typography>
                        <Typography sx={{ fontSize: "56px", fontWeight: "bold", paddingTop: "4%", textAlign: "center", color: "#340D73" }}>4</Typography>
                        <Typography  sx={{ fontSize: "16px", fontWeight: "bold", paddingTop: "1%", textAlign: "center", color: "#666666" }}>COUNTRIES</Typography>
                    </Box>
                    <Box sx={{
                        background: "#F4F6FF",
                        width: "18%",
                        height: "28vh",
                        marginTop: "-13%",
                        marginLeft: "73%",
                        borderRadius: "10px"
                    }}>
                        <Typography sx={{ fontSize: "16px", fontWeight: "bold", paddingTop: "11%", textAlign: "center", color: "#666666" }}>SUCCESSFUL PROJECTS</Typography>
                        <Typography sx={{ fontSize: "56px", fontWeight: "bold", paddingTop: "7%", textAlign: "center", color: "#340D73" }}>100+</Typography>
                    </Box>
                </Grid>
            </Box>
            <Footer/>
        </Grid>
    )
}

export default Leadership
