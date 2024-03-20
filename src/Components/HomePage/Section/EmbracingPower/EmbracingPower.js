import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Typography, useMediaQuery } from "@mui/material";
import AiButton from "../../../Button/AiButton";
import EmbracingImages from "./EmbracingImages";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const EmbracingPower = () => {
  // const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  // const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  // const CenteredContainer = styled("div")({
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   margin: "80px",
  // });
  // const textStyles = {
  //   fontFamily: "Open Sans,sans-serif",
  //   fontSize: isSmallScreen ? "12px" : isMediumScreen ? "22px" : "44px",
  //   lineHeight: isSmallScreen ? "15px" : "52.8px",
  //   letterSpacing: "0em",
  // };
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <Grid container sx={{ padding: "80px 50px" }}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} container>
        <Grid item xs container direction="column">
          <Grid item xs>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Open Sans,sans serif",
                fontSize: "44px",
                lineHeight: "52.8px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
              gutterBottom
            >
              <span style={{ color: "#340D73", fontWeight: 700 }}>
                <b>Embracing {""} </b>
              </span>
              <span style={{ color: "#000000", fontWeight: 300 }}>
                power of data and advanced AI for the automotive industry
              </span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Open Sans,sans serif",
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left",
                fontWeight: 400,
                color: "#57647c",
              }}
            >
              How a subsidiary of the japanese automotive manufacturer producing
              commercial <br /> vehicles and disel engines achieved 30%
              reduction in year on year IT spend with <br /> improved
              infrastructure efficiency and minimal operational overhead
            </Typography>
          </Grid>
          <Grid item xs>
            <AiButton
              onClick={handleClick}
              showArrow={true}
              width={{ xs: "100%", sm: "100%", md: "30%", lg: "30%" }}
              padding={"6px"}
            >
              <Typography
                sx={{
                  fontFamily: "Open Sans,Poppins",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  fontWeight: 400,
                  color: "#ffffff",
                }}
              >
                Watch AI In Action
              </Typography>
            </AiButton>
          </Grid>
        </Grid>
      </Grid>
      {/* Right side content */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <EmbracingImages />
      </Grid>
    </Grid>
  );
};
export default EmbracingPower;
