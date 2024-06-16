import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Link,
  CardMedia,
} from "@mui/material";
import SEBI from "../../img/invest1.png";
import theme from "../../theme";
import backgroundImage from "../../img/earth1.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import img from "../../img/investors.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import StyledTextField from "../../component/StyledTextField";
// import emailjs from "emailjs-com";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Must be less than 50 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Must be a valid phone number with at least 10 digits"
    )
    .required("Required"),
  subject: Yup.string()
    .min(5, "Must be at least 5 characters")
    .max(100, "Must be less than 100 characters")
    .required("Required"),
  message: Yup.string()
    .min(10, "Must be at least 10 characters")
    .required("Required"),
});

const styles = {
  h1: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontFamily: "Poppins, sans-serif",
  },
  h2: {
    fontSize: { md: 16, xs: 14 },
    fontWeight: 500,
    fontFamily: "Poppins, sans-serif",
  },
  h3: {
    fontSize: { md: 16, xs: 14 },
    fontWeight: 300,
    fontFamily: "Poppins, sans-serif",
  },
  h4: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
  },
};

const InvestorGrievancePage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const templateParams = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        subject: values.subject,
        message: values.message,
      };
      console.log("templateParams", templateParams);
      try {
        const response = await fetch(
          "https://vmarc-api.atcrews.com/investor_request",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(templateParams),
          }
        );

        console.log("Response Status:", response.status);

        if (response.ok) {
          alert("Email sent successfully");
          resetForm();
        } else {
          alert("Error sending email");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error sending email");
      }
    },
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: isMobile ? 0 : "-10%",
          left: 0,
          width: "100%", // Full screen width
          overflow: "hidden", // Hide overflow
          zIndex: -1,
        }}
      >
        <img
          src={backgroundImage}
          alt="background"
          style={{
            width: "100%", // Full width of container
            height: "auto", // Maintain aspect ratio
            objectFit: "cover", // Ensure the image is contained within the container
          }}
        />
      </div>
      <Container maxWidth={"lg"} sx={{ position: "relative" }}>
        <Grid container spacing={5} sx={{ mb: 10 }}>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              mt: 20,
            }}
          >
            <Typography
              variant="hb1"
              fontWeight={800}
              sx={{ fontSize: { md: "50px", xs: "30px" }, color: "#C3C3C3" }}
            >
              Investor Grievance
            </Typography>
          </Grid>
          <Grid item sm={12} lg={12} sx={{}}>
            <Box sx={{ display: "flex", mb: 5 }}>
              <Card
                sx={{
                  backgroundColor: "#1D1D1D",
                  borderRadius: 2,
                  color: "white",
                  padding: 2,
                  width: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    component="h1"
                    gutterBottom
                    sx={{ ...styles.h1, fontSize: { md: 32, xs: 22 } }}
                  >
                    Grievance Redressal Contact Details
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={styles.h3}
                    gutterBottom
                  >
                    Email:{" "}
                    <Link href="mailto:investor@v-marc.in" color="inherit">
                      investor@v-marc.in
                    </Link>
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ ...styles.h4, color: "#c3c3c3", mb: 2 }}
                  >
                    Contact Information of the designated officials of the
                    listed entity responsible for assisting and handling
                    investor grievances
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={styles.h2}
                  >
                    Anuj Ahluwalia
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    gutterBottom
                    sx={styles.h3}
                  >
                    Company Secretary & Compliance Officer
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    gutterBottom
                    sx={styles.h3}
                  >
                    Phone:{" "}
                    <Link href="tel:+919389922395" color="inherit">
                      +91 9389922395
                    </Link>
                  </Typography>
                  <Typography variant="body1" component="p" sx={styles.h3}>
                    Email:{" "}
                    <Link href="mailto:cs@v-marc.in" color="inherit">
                      cs@v-marc.in
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item sm={12} lg={6} sx={{}}>
            <CardMedia
              component="img"
              sx={{
                backgroundColor: "white",
                objectFit: "cover", // Ensures the image covers the area
                objectPosition: "top", // Positions the upper part of the image within the container
                borderRadius: 2,
              }}
              image={img}
              alt="Image"
            />
          </Grid>
          <Grid item sm={12} lg={6}>
            <Typography
              variant="h6"
              gutterBottom
              color={"white"}
              sx={{
                ...styles.h3,
                mb: 2,
                textAlign: "left",
                fontSize: { md: 16, xs: 20 },
                fontWeight: {
                  xs: 600,
                  md: 400,
                },
              }}
            >
              Send your message to us
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    label="Your Name"
                    name="name"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField label="Email" name="email" formik={formik} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField label="Phone" name="phone" formik={formik} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    label="Subject"
                    name="subject"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    label="Message"
                    name="message"
                    formik={formik}
                    multiline
                    rows={4}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    sx={{ mt: 2, backgroundColor: "#d32f2f" }}
                  >
                    Send Mail
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default InvestorGrievancePage;
