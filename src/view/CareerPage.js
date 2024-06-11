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
import { json } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Must be less than 50 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  // link: Yup.string().url("Must be a valid URL").required("Required"),
  pdf: Yup.mixed()
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
    })
    .test("fileSize", "File too large", (value) => {
      return value && value.size <= 1024 * 1024;
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
      pdf: null,
      // link: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const formdata = new FormData();
      formdata.append("email", values.email);
      formdata.append("name", values.name);
      formdata.append("message", values.message);
      formdata.append("pdf", values.pdf);

      console.log("Carrier Form Values:", values);
      console.log("Template Params:", formdata);
      try {
        const response = await fetch(
          "https://vmarc-api.atcrews.com/job_request",
          {
            method: "POST",
            body: formdata,
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
          width: "100%",
          overflow: "hidden",
          zIndex: -1,
          height: "auto",
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
                Careers
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
                    {/* <Grid item xs={12} md={12}>
                      <StyledTextField
                        label="Your Resume Link"
                        name="link"
                        formik={formik}
                      />
                    </Grid> */}

                    <Grid item xs={12}>
                      <Typography variant="body1" gutterBottom>
                        Upload Your Resume (.doc, .dox, .docx, .pdf)*
                      </Typography>
                      <input
                        id="pdf"
                        name="pdf"
                        type="file"
                        accept="application/pdf"
                        onChange={(event) => {
                          console.log(event);
                          formik.setFieldValue("pdf", event.target.files[0]);
                          // formik.setFieldValue("pdf", event.target.value);
                        }}
                      />
                      {formik.touched.pdf && formik.errors.pdf ? (
                        <Typography variant="body2" color="error">
                          {formik.errors.pdf}
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
