import React, { useState } from "react";
import { Container, Box, Typography, Grid, CardMedia } from "@mui/material";

const Service = () => {
  return (
    <Grid container sx={{ minWidth: "1100px", overflowX: "sroll" }}>
      <Grid
        item
        xs={3.8}
        md={3.8}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            right: 2,
            transform: "translateY(-50%)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontSize: "47px",
              fontWeight: 900,
              textAlign: "start",
              color: "rgba(255, 255, 255, 0.19)",
              lineHeight: 0.5,
              //   backgroundColor: "red",
            }}
          >
            01
          </Typography>
          <Typography
            sx={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              textAlign: "right",
              fontSize: "16px",
            }}
            variant="h4" // You can change the variant as per your requirement
          >
            A targeted stock policy.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1.5} md={1.5} sx={{}}>
        <CardMedia
          component="img"
          alt="green iguana"
          width={100}
          height={100}
          image={require("../img/Vector1.png")}
          sx={{ objectFit: "contain" }}
        />
      </Grid>
      <Grid item xs={1.4} md={1.4}></Grid>
      <Grid item xs={1.5} md={1.5}>
        <CardMedia
          component="img"
          alt="green iguana"
          width={100}
          height={100}
          image={require("../img/Vector2.png")}
          sx={{ objectFit: "contain" }}
        />
      </Grid>
      <Grid
        item
        xs={3.8}
        md={3.8}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",
          // backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            left: 2,
            transform: "translateY(-50%)",
          }}
        >
          <Typography
            sx={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              textAlign: "left",
              fontSize: "16px",
            }}
            variant="h4" // You can change the variant as per your requirement
          >
            Reliable & Consistent quality
          </Typography>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontSize: "47px",
              fontWeight: 900,
              textAlign: "start",
              color: "rgba(255, 255, 255, 0.19)",
              lineHeight: 0.5,
              //   backgroundColor: "red",
            }}
          >
            02
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={3.8}
        md={3.8}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          //   position: "relative",
          // backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // position: "absolute",
            // left: 2,
            // transform: "translateY(-50%)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontSize: "47px",
              fontWeight: 900,
              textAlign: "start",
              color: "rgba(255, 255, 255, 0.19)",
              //   lineHeight: 0.5,
              //   backgroundColor: "red",
            }}
          >
            03
          </Typography>
          <Typography
            sx={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              textAlign: "right",
              fontSize: "16px",
            }}
            variant="h4" // You can change the variant as per your requirement
          >
            Product development & enrichment as demanded by the changing markets
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1.5} md={1.5}>
        <CardMedia
          component="img"
          alt="green iguana"
          width={100}
          height={100}
          image={require("../img/Vector5.png")}
          sx={{ objectFit: "contain", width: "70%" }}
        />
      </Grid>
      <Grid item xs={1.4} md={1.4}>
        <CardMedia
          component="img"
          alt="green iguana"
          width={100}
          height={100}
          image={require("../img/logo.png")}
          sx={{ objectFit: "contain" }}
        />
      </Grid>
      <Grid
        item
        xs={1.5}
        md={1.5}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          width={100}
          height={100}
          image={require("../img/Vector5.png")}
          sx={{ objectFit: "contain", width: "70%" }}
        />
      </Grid>
      <Grid
        item
        xs={3.8}
        md={3.8}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // position: "absolute",
            // left: 2,
            // transform: "translateY(-50%)",
          }}
        >
          <Typography
            sx={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              textAlign: "left",
              fontSize: "16px",
            }}
            variant="h4" // You can change the variant as per your requirement
          >
            Technical Support for cable applications / cables cost optimization
            for projects etc.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontSize: "47px",
              fontWeight: 900,
              textAlign: "start",
              color: "rgba(255, 255, 255, 0.19)",
              //   lineHeight: 0.5,
              //   backgroundColor: "red",
            }}
          >
            04
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={3.8}
        md={3.8}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          position: "relative",
          // backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            position: "absolute",
            right: 0,
            bottom: -10,
            // transform: "translateY(-50%)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontSize: "47px",
              fontWeight: 900,
              textAlign: "start",
              color: "rgba(255, 255, 255, 0.19)",
              lineHeight: 0.5,
              //   backgroundColor: "red",
            }}
          >
            05
          </Typography>
          <Typography
            sx={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              textAlign: "end",
              fontSize: "16px",
            }}
            variant="h4" // You can change the variant as per your requirement
          >
            Commercially Competetive Pricing
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1.5} md={1.5}>
        <CardMedia
          component="img"
          alt="green iguana"
          width={100}
          height={100}
          image={require("../img/Vector3.png")}
          sx={{ objectFit: "contain" }}
        />
      </Grid>
      <Grid item xs={1.4} md={1.4}></Grid>
      <Grid item xs={1.5} md={1.5}>
        <CardMedia
          component="img"
          alt="green iguana"
          width={100}
          height={100}
          image={require("../img/Vector4.png")}
          sx={{ objectFit: "contain" }}
        />
      </Grid>
      <Grid
        item
        xs={3.8}
        md={3.8}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          position: "relative",
          // backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            position: "absolute",
            left: 0,
            bottom: -10,
            // transform: "translateY(-50%)",
          }}
        >
          <Typography
            sx={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              textAlign: "end",
              fontSize: "16px",
            }}
            variant="h4" // You can change the variant as per your requirement
          >
            On time deliveries
          </Typography>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontSize: "47px",
              fontWeight: 900,
              textAlign: "start",
              color: "rgba(255, 255, 255, 0.19)",
              lineHeight: 0.5,
              //   backgroundColor: "red",
            }}
          >
            06
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Service;
