import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Link,
  Card,
  CardContent,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import theme from "../theme";
import backgroundImage from "../img/earth1.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import StyledTextField from "../component/StyledTextField";
import img from "../img/hiring.jpg";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Must be less than 50 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  resume: Yup.mixed()
    .required("Required")
    .test("fileType", "Unsupported File Format", (value) => {
      return (
        value &&
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(value.type)
      );
    }),
  message: Yup.string()
    .min(10, "Must be at least 10 characters")
    .required("Required"),
});

const styles = {
  h1: {
    fontSize: 23,
    fontWeight: 500,
    lineHeight: 1.5,
    color: "#FFFF",
    fontFamily: "Poppins, sans-serif",
  },
  h2: {
    fontSize: 20,
    fontWeight: 500,
    color: theme.palette.primary.main,
    fontFamily: "Poppins, sans-serif",
  },
  h3: {
    fontSize: 16,
    fontWeight: 400,
    color: "#c9c9c9",
    fontFamily: "Poppins, sans-serif",
  },
  h4: {
    fontSize: 16,
    fontWeight: 300,
    color: "#ffff",
    fontFamily: "Poppins, sans-serif",
  },
};

const CareerPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      resume: null,
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: isMobile ? 0 : "-10%",
          left: 0,
          width: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <img
          src={backgroundImage}
          alt="background"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
      <Container maxWidth={"lg"} sx={{ position: "relative" }}>
        <Grid container spacing={5} sx={{ mb: 10 }}>
          <Grid
            xs={12}
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              mt: 20,
              mb: 5,
            }}
          >
            <Box
              sx={{ color: "#C3C3C3" }}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography variant="hb1" fontWeight={800}>
                Career
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <CardMedia
              component="img"
              sx={{
                height: "100%",
                backgroundColor: "white",
                objectFit: "cover", // Ensures the image covers the area
                borderRadius: 2,
              }}
              image={img}
              alt="Image"
            />
          </Grid>
          <Grid item sm={12} lg={6}>
            <Card
              sx={{
                backgroundColor: "#1D1D1D",
                borderRadius: 2,
                color: "white",
                padding: 2,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  color={"white"}
                  sx={{ ...styles.h1, mb: 2, textAlign: "left" }}
                >
                  SUBMIT YOUR RESUME
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <StyledTextField
                        label="Your Name"
                        name="name"
                        formik={formik}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <StyledTextField
                        label="Your Email"
                        name="email"
                        formik={formik}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="body1" gutterBottom>
                        Upload Your Resume (.doc, .dox, .docx, .pdf)*
                      </Typography>
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "resume",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      {formik.touched.resume && formik.errors.resume ? (
                        <Typography variant="body2" color="error">
                          {formik.errors.resume}
                        </Typography>
                      ) : null}
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
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CareerPage;
