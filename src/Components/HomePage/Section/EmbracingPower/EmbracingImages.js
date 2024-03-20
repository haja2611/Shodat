import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import trace from "../../../../Assets/EmbracingPower/eOps Trace.png";
import watch from "../../../../Assets/EmbracingPower/eOps Watch.png";
import prosense from "../../../../Assets/EmbracingPower/eOps Prosense.png";
import insights from "../../../../Assets/EmbracingPower/eOps Insights1.jpg";

export default function EmbracingImages() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        ml: { xs: 0, sm: 0, md: 5, lg: 10 },
        width: { lg: 550 },
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        sx={{ mt: { xs: 0, sm: 0, md: 2, lg: 7 } }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ ml: { xs: 0, sm: 1, md: 0, lg: 7 } }}
          >
            <Paper
              elevation={20}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 120,
                width: { xs: 150, sm: 190, md: 190 },
                borderRadius: "10px",
              }}
            >
              <img
                src={watch}
                alt="eOps Watch"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: 10,
                  height: 100,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Open Sans,sans-serif",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  fontWeight: 700,
                }}
                align="center"
                mt={1}
              >
                eOps Watch
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Paper
              elevation={20}
              sx={{
                pb: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 150,
                width: { xs: 150, sm: 190, md: 250 },
                borderRadius: "10px",
              }}
            >
              <img
                src={prosense}
                alt="eOps Presense"
                style={{ width: "100%", objectFit: "cover", borderRadius: 8 }}
              />
              <Typography
                sx={{
                  fontFamily: "Open Sans,sans-serif",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  fontWeight: 700,
                }}
                align="center"
                mt={1}
              >
                eOps Prosense
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Paper
              elevation={20}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 120,
                width: { xs: 150, sm: 190, md: 190 },
                borderRadius: "10px",
              }}
            >
              <img
                src={trace}
                alt="eOps Trace"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: 10,
                  height: 100,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Open Sans,sans-serif",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  fontWeight: 700,
                }}
                align="center"
                mt={1}
              >
                eOps Trace
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper
              elevation={20}
              sx={{
                pb: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 150,
                width: { xs: 150, sm: 190, md: 250 },
                borderRadius: "10px",
              }}
            >
              <img
                src={insights}
                alt="eOps Insights"
                style={{ width: "100%", objectFit: "cover", borderRadius: 8 }}
              />
              <Typography
                sx={{
                  fontFamily: "Open Sans,sans-serif",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  fontWeight: 700,
                }}
                align="center"
                mt={1}
              >
                eOps Insights
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
