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
} from "@mui/material";
import theme from "../theme";
import backgroundImage from "../img/earth1.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import StyledTextField from "../component/StyledTextField";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Must be less than 50 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
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

const ContactUsPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formikRequest = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const templateParams = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      };
      console.log("Contact us Form", templateParams);
      try {
        const response = await fetch(
          "https://1yh728hhzg.execute-api.ap-south-1.amazonaws.com/prod/send_request",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(templateParams),
          }
        );

        if (response.ok) {
          alert("Email sent successfully");
        } else {
          alert("Error sending email");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error sending email");
      }
    },
  });

  const formikFeedback = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const templateParams = {
        name: values.name,
        email: values.email,
        message: values.message,
      };
      console.log("FeedBack Form Values:", values);
      console.log("Template Params:", templateParams);
      try {
        const response = await fetch(
          "https://1yh728hhzg.execute-api.ap-south-1.amazonaws.com/prod/send_feedback",
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
                Contact Us
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <Typography component="h1" gutterBottom sx={styles.h2}>
              Registered Office
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={styles.h4}
              gutterBottom
            >
              Plot No.3, 4, 18 & 20A, <br />
              Sector-IIDC, SIDCUL,
              <br />
              Haridwar, Uttarakhand - 249403
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              sx={styles.h3}
            >
              Phone:{" "}
              <Link href="tel:01334-239638" color="inherit">
                01334-239638
              </Link>
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              sx={styles.h3}
            >
              Customer Support :{" "}
              <Link href="tel:+917055521808" color="inherit">
                7055521808
              </Link>
            </Typography>
            <Typography variant="body1" component="p" sx={styles.h3}>
              Email:{" "}
              <Link href="mailto:info@v-marc.in" color="inherit">
                info@v-marc.in
              </Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <Typography component="h1" gutterBottom sx={styles.h2}>
              Noida Office
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={styles.h4}
              gutterBottom
            >
              Trapezoid IT Park, <br />
              3rd Floor, C-27, C Block, <br /> Phase 2, Sector-62,
              <br /> Noida, Uttar Pradesh - 201309
            </Typography>
            <Typography variant="body1" component="p" sx={styles.h3}>
              Email:{" "}
              <Link href="mailto:sales@v-marc.in" color="inherit">
                sales@v-marc.in
              </Link>
              <br />
              <Link href="mailto:salesproject@v-marc.in" color="inherit">
                salesproject@v-marc.in
              </Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <Typography component="h1" gutterBottom sx={styles.h2}>
              Mumbai Office
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={styles.h4}
              gutterBottom
            >
              91,Spring Board , 74,Techno Park,74/II,C Cross Road, Opp.Gate No.
              2, MIDC ,SEEPZ, Andheri (East), Mumbai, Maharashtra - 400093
            </Typography>
            <Typography variant="body1" component="p" sx={styles.h3}>
              Email:{" "}
              <Link href="mailto:sales@v-marc.in" color="inherit">
                sales@v-marc.in
              </Link>
              <br />
              <Link href="mailto:salesproject@v-marc.in" color="inherit">
                salesproject@v-marc.in
              </Link>
            </Typography>
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
                  Submit Your Request
                </Typography>
                <form onSubmit={formikRequest.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <StyledTextField
                        label="Your Name"
                        name="name"
                        formik={formikRequest}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        label="Your Email"
                        name="email"
                        formik={formikRequest}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <StyledTextField
                        label="Subject"
                        name="subject"
                        formik={formikRequest}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        label="Message"
                        name="message"
                        formik={formikRequest}
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
                  Customer Feedback
                </Typography>
                <form onSubmit={formikFeedback.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <StyledTextField
                        label="Your Name"
                        name="name"
                        formik={formikFeedback}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        label="Your Email"
                        name="email"
                        formik={formikFeedback}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <StyledTextField
                        label="Message"
                        name="message"
                        formik={formikFeedback}
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

export default ContactUsPage;
