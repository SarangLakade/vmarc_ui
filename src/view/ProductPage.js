import * as React from "react";
import Button from "@mui/material/Button";
import {
  Typography,
  Grid,
  Container,
  Box,
  CardMedia,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  styled,
} from "@mui/material";
import backgroundImage from "../img/earth1.png";
import { InfoOutlined, Download, ContactMail } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";
import { useNavigate, useLocation } from "react-router-dom";

const StandardsComponent = ({ title, description }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        alignItems="center" // This aligns items vertically center
        justifyContent="left" // This aligns items horizontally left
      >
        <Typography variant="h4" fontWeight={600}>
          {title}
        </Typography>
        <InfoOutlined style={{ marginLeft: 8 }} />
        {/* Adds some space between text and icon */}
      </Box>
      <Typography variant="h5" color="#BAFFC1" mt={1}>
        {description}
      </Typography>
    </Box>
  );
};
const FeatureCard = ({ icon, title }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      sx={{ alignItems: "center", mr: 1 }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          // backgroundColor: ,
          border: `1px solid ${theme.palette.secondary.main}`,
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          flexShrink: 0,
          mr: 1,
        }}
      >
        <InfoOutlined />
        {/* Adds some space between text and icon */}
      </Box>
      <Typography variant="h4" sx={{ fontSize: "16px", textAlign: "left" }}>
        {title}
      </Typography>
    </Box>
  );
};
const Paragraph = ({ header, description }) => {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={600}
        textAlign={"left"}
        sx={{ my: 2, mt: 4 }}
        color={"#ffff"}
      >
        {header}
      </Typography>
      <Typography
        textAlign={"left"}
        variant="h4"
        sx={{ fontSize: "16px" }}
        color={"#ffff"}
        dangerouslySetInnerHTML={{ __html: description }}
      ></Typography>
    </>
  );
};

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item, category } = location.state || {};
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [age, setAge] = React.useState("");
  console.log("Item from Product page ", item);
  console.log("Item from Product category ", category);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
            // transform: `rotate(270deg)`, // Rotate the image if needed
          }}
        />
      </div>
      <Container maxWidth={"lg"}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              mt: 20,
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box mb={5}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#fff",
                  textAlign: "center",
                  display: "inline-block",
                  backgroundColor: theme.palette.primary.main,
                  padding: "8px 16px", // Optional: Adds some padding for better appearance
                  borderRadius: "4px", // Optional: Adds rounded corners
                }}
              >
                {category}
              </Typography>
              <Box mb={1} mt={1}>
                <Typography variant="hb4">{item.title}</Typography>
              </Box>

              <Typography variant="h5">{item.description}</Typography>

              {category === "Geyser" && item.features.length > 0 && (
                <Grid container>
                  {item.features.map((feature, i) => (
                    <Grid
                      key={i}
                      item
                      xs={6}
                      md={4}
                      sx={{
                        mt: 2,
                        color: "white",
                      }}
                    >
                      <FeatureCard icon={""} title={feature.title} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>

            {category !== "Geyser" ? (
              <Box
                mt={2}
                display="flex"
                flexBasis={"row"}
                alignItems="center" // This aligns items vertically center
                justifyContent={"space-between"}
              >
                {item.features.length > 0 &&
                  item.features.map((feature, i) => (
                    <StandardsComponent
                      key={i}
                      title={feature.title}
                      description={feature.des}
                    />
                  ))}
              </Box>
            ) : (
              <Box
                mt={2}
                mb={5}
                display="flex"
                flexBasis={"row"}
                alignItems="center" // This aligns items vertically center
                justifyContent={"space-between"}
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  // border: `1px solid ${theme.palette.secondary.main}`,
                  borderRadius: 10,
                  p: 1,
                  px: 2,
                }}
              >
                {item.tags.map((tag, i) => (
                  <React.Fragment key={i}>
                    <Typography
                      dangerouslySetInnerHTML={{ __html: tag }}
                    ></Typography>
                    {i < item.tags.length - 1 && (
                      <Typography mx={1}>|</Typography>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            )}
            <Box display="flex" gap={1}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<ContactMail />}
                sx={{ px: 5 }}
                onClick={() => navigate("/contact us")}
              >
                Contact
              </Button>
              {/* <Button
                variant="outlined"
                color="secondary"
                startIcon={<Download />}
                sx={{ px: 10 }}
                onClick={() => window.open(item.brochureLink, "_blank")}
              >
                Download Brochure
              </Button> */}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              mt: { xs: 0, md: 20 },
              color: "white",
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              // width={100}
              // height={100}
              src={item.img}
              sx={{ objectFit: "contain", maxHeight: 400 }}
            />
            {category === "Geyser" ? (
              <Card
                sx={{
                  mt: 4,
                  backgroundColor: "#1D1D1D",
                  p: 1,
                  borderRadius: "8px",
                }}
              >
                <CardContent>
                  <Typography
                    variant="body2"
                    color="#ffff"
                    sx={{ fontWeight: "bold" }}
                  >
                    Capacity :
                    {item.capacity.map((cap, i) => (
                      <span
                        key={i}
                        style={{
                          // marginRight: "8px",
                          fontWeight: "500",
                          fontStyle: "italic",
                        }}
                      >
                        {" " + cap + " "}
                      </span>
                    ))}
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              <Card
                sx={{
                  mt: 4,
                  backgroundColor: "#1D1D1D",
                  p: 1,
                  borderRadius: "8px",
                }}
              >
                <CardContent>
                  <Typography
                    variant="body2"
                    color="#ffff"
                    sx={{ fontWeight: "bold" }}
                  >
                    Colour
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      my: 1,
                    }}
                  >
                    {item.color.map((color, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: 24,
                          height: 24,
                          backgroundColor: color,
                          borderRadius: "50%",
                          marginRight: "8px",
                        }}
                      ></Box>
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    color="#c9c9c9"
                    sx={{ fontStyle: "italic" }}
                  >
                    Available other colour as per customers’ requirement.
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
          <Grid item xs={12} md={8} my={1} mb={5}>
            {item.paragraph.length > 0 && (
              <Paragraph
                header={item.paragraph[0].title}
                description={item.paragraph[0].des}
              />
            )}
          </Grid>
        </Grid>
      </Container>
      {item.paragraph.length > 1 && (
        <div
          style={{
            backgroundColor: "#2B2B2B",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Container maxWidth={"lg"}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={8}
                my={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "Center",
                  // alignItems: "center",
                  // my: 20,
                  color: "white",
                }}
              >
                {item.paragraph.slice(1).map((para, i) => (
                  <Paragraph header={para.title} description={para.des} />
                ))}
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};

export default ProductPage;
