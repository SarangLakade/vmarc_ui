import * as React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Autocomplete,
  CardMedia,
} from "@mui/material";
import backgroundImage from "../img/homeEarth.png";
import Ellipse from "../img//Ellipse.png";
import Frame2 from "../img/Frame2.png";
import ProductFamily from "../img/produt-family-no-bg.png";
import {
  PlayCircleFilled,
  Search,
  ArrowUpward,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import theme from "../theme";
import ProductCard from "../component/ProductCard";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MySVG } from "../img/Group 95.svg";
import { Products } from "../productContent";
import SocialMediaBox from "../component/SocialMediaBox";
import CommingSoon1 from "../img/comming-soon1.png";
import CommingSoon2 from "../img/comming-soon2.png";
import CommingSoon3 from "../img/comming-soon3.png";

const scrollBoxStyles = {
  "&::-webkit-scrollbar": {
    height: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#555", // Scrollbar thumb color
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#777", // Scrollbar thumb hover color
  },
  "&::-webkit-scrollbar-track": {
    background: "#333", // Scrollbar track color
  },
  scrollbarColor: "#555 #333", // For Firefox
  scrollbarWidth: "thin", // For Firefox
};

const HomePage = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLg = useMediaQuery(theme.breakpoints.down("xl"));
  const allTitles = Products.flatMap((product) =>
    product.items.map((item) => item.title)
  );
  const AllProducts = Products.flatMap((product) => product.items);

  const [searchQuery, setSearchQuery] = React.useState("");

  const [filteredProducts, setFilteredProducts] = React.useState(AllProducts);

  console.log("filteredProducts", filteredProducts);
  const handleSearchChange = (event, value) => {
    setSearchQuery(value);
  };

  const performSearch = (query) => {
    const searchLowercase = query.toLowerCase();
    setSearchQuery(query);

    if (searchLowercase === "") {
      setFilteredProducts(AllProducts);
    } else {
      const filtered = Products.flatMap((product) =>
        product.items.filter((item) =>
          item.title.toLowerCase().includes(searchLowercase)
        )
      );

      setFilteredProducts(filtered);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch(searchQuery);
    }
  };

  const handleButtonClick = () => {
    performSearch(searchQuery);
  };

  const handleOpenPDF = (link) => {
    console.log("Box clicked:", link);

    window.open(link, "_blank");
  };
  const svg =
    "data:image/svg+xml,%3Csvg%20width%3D%22176%22%20height%3D%22849%22%20viewBox%3D%220%200%20176%20849%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20filter%3D%22url(%23filter0_di_0_270)%22%3E%3Cpath%20d%3D%22M151.088%2025.1958V97.1607C151.088%20103.847%20145.668%20109.267%20138.982%20109.267H21.282C14.5959%20109.267%209.17578%20114.687%209.17578%20121.373V641.269V765.695V839.677%22%20stroke%3D%22url(%23paint0_linear_0_270)%22%20stroke-width%3D%224.03542%22%20stroke-linecap%3D%22round%22/%3E%3C/g%3E%3Cg%20filter%3D%22url(%23filter1_dd_0_270)%22%3E%3Ccircle%20cx%3D%22151.761%22%20cy%3D%2225.1958%22%20r%3D%224.03542%22%20fill%3D%22white%22/%3E%3C/g%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_di_0_270%22%20x%3D%220.432264%22%20y%3D%2216.4523%22%20width%3D%22159.399%22%20height%3D%22831.968%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22/%3E%3CfeOffset/%3E%3CfeGaussianBlur%20stdDeviation%3D%223.36285%22/%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22/%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.6%200%200%200%200%200.282353%200%200%200%200%200.984314%200%200%200%201%200%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_0_270%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_0_270%22%20result%3D%22shape%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22/%3E%3CfeOffset/%3E%3CfeGaussianBlur%20stdDeviation%3D%222.69028%22/%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22/%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.9%200%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_0_270%22/%3E%3C/filter%3E%3Cfilter%20id%3D%22filter1_dd_0_270%22%20x%3D%22127.548%22%20y%3D%220.983316%22%20width%3D%2248.425%22%20height%3D%2248.425%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22/%3E%3CfeMorphology%20radius%3D%222.69028%22%20operator%3D%22dilate%22%20in%3D%22SourceAlpha%22%20result%3D%22effect1_dropShadow_0_270%22/%3E%3CfeOffset/%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22/%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.643137%200%200%200%200%200.211765%200%200%200%200%200.976471%200%200%200%201%200%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_0_270%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22/%3E%3CfeOffset/%3E%3CfeGaussianBlur%20stdDeviation%3D%2210.0885%22/%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22/%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.839216%200%200%200%200%200.239216%200%200%200%200%200.435294%200%200%200%201%200%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_0_270%22%20result%3D%22effect2_dropShadow_0_270%22/%3E%3";

  return (
    <div style={{ position: "relative" }}>
      <SocialMediaBox />

      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            // height: "100%",
            overflow: "visible",
            zIndex: -1,
          }}
        >
          <img
            src={backgroundImage}
            alt="background"
            loading="eager"
            style={{
              width: "100%", // Full width of container
              height: "auto", // Maintain aspect ratio
              objectFit: "cover", // Ensure the image is contained within the container
            }}
          />
        </div>
      </div>

      <Container maxWidth={"lg"}>
        <div id="back-to-top-anchor" />
        <Grid
          container
          spacing={2}
          sx={{
            color: "white",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: -180,
              width: "100%",
              height: "70%",
              display: isLg ? "none" : undefined,
            }}
          >
            <MySVG
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                // width: '100%',
                height: "100%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: 90,
                bottom: -50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowBackIos
                fontSize="small"
                sx={{ color: "white", alignItems: "flex-end" }}
              />
              <img
                src={Ellipse}
                alt="background"
                style={{
                  width: "50px", // Full width of container
                  height: "50px", // Maintain aspect ratio
                  objectFit: "cover", // Ensure the image is contained within the container
                }}
              />
              <ArrowForwardIos
                fontSize="small"
                sx={{ color: "white", alignItems: "flex-start" }}
              />
            </Box>
          </Box>

          <Grid item xs={12} sx={{ mt: 25, mb: { md: 25, xs: 10 } }}>
            <Typography variant="h6" component="div">
              Experience Excellence with Us
            </Typography>
            <Typography
              variant="hb1"
              component="div"
              sx={{
                marginY: 3,
                marginBottom: 4,
                fontSize: { md: "50px", xs: "40px" },
              }}
            >
              Connecting & <br />
              Enlightening Lives
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
              <Button
                variant="outlined"
                sx={{ mr: 2 }}
                onClick={() =>
                  handleOpenPDF("./vmarc/V-Marc India Ltd. Profile_new_14.pdf")
                }
              >
                Our Profile
              </Button>
              <Button
                variant="contained"
                startIcon={<PlayCircleFilled />}
                href="https://www.youtube.com/@v-marcwirescables8469/videos"
              >
                Watch Video
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            color: "white",
            my: 5,
            position: "relative",
            // overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: isLg ? "none" : undefined,
              position: "absolute",
              bottom: -50,
              right: -50,
              width: "100%",
              height: "105%",
              // backgroundColor: "red",
              overflow: "hidden",
              borderBottomRightRadius: 10,
              zIndex: -1,
              "&::before": {
                content: "''",
                position: "absolute",
                zIndex: -999,
                // right: "-50%",
                // bottom: "-50%",
                width: "200%",
                height: "300%",
                backgroundRepeat: "repeat",
                backgroundSize: "50% 50%, 50% 50%",
                backgroundPosition: "0 0, 100% 0, 100% 100%, 0 100%",
                backgroundImage:
                  "linear-gradient(#9747FF, #FF6B00), linear-gradient(#05FF00, #1E4705), linear-gradient(#1D4EFF, #0085FF), linear-gradient(#9B49F6, #BD00FF)",
                animation: "rotate 4s linear infinite",
              },
              "&::after": {
                content: "''",
                position: "absolute",
                zIndex: -2,
                bottom: "4px",
                right: "4px",
                width: "100% ",
                height: "100% ",
                background: "black",
                borderRadius: "5px",
              },
            }}
          >
            <style jsx>{`
              @keyframes rotate {
                0% {
                  transform: rotate(360deg);
                }
                100% {
                  transform: rotate(0deg);
                }
              }
            `}</style>
          </Box>
          <Grid item sm={12} md={6} sx={{ mb: 5 }}>
            <Typography
              variant="hb3"
              component="div"
              sx={{ fontSize: { md: "40px", xs: "25px" } }}
            >
              Premium & Durable Wires and cables
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginY: 3,
                marginBottom: 4,
                // textAlign: "justify",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              V-Marc is one of the global leader in providing reliable and
              consistent quality of products, we enable our clients to achieve
              more and outperform their competitors and stay ahead of the
              innovation curve. The growth of the latter is the first stepping
              stone towards the growth of the company and hence customer’s
              satisfaction is its prime objective. <br />
              <br /> V-Marc has earned the trust and reputation in India by
              winning the customer’s confidence.
            </Typography>
            <Box display={"flex"} flexDirection={"row"}>
              <Grid
                item
                xs={6}
                sx={{
                  backgroundColor: "#D9D9D94A",
                  padding: 1,
                  px: { xs: 1, md: 2 },
                  borderBottom: "4px solid #F24535",
                  mr: 2,
                }}
                flexDirection={"row"}
              >
                <Typography
                  component="div"
                  sx={{
                    color: theme.palette.primary.main,
                    textAlign: "center",
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { md: 40, xs: 35 },
                  }}
                >
                  18+
                </Typography>
                <Typography variant="h5" component="div" align="center">
                  years of delivering
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ letterSpacing: "6px" }}
                  align="center"
                >
                  EXCELLENCE
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  backgroundColor: "#D9D9D94A",
                  padding: 1,
                  px: { xs: 1, md: 2 },
                  borderBottom: "4px solid #F24535",
                }}
                flexDirection={"row"}
              >
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    textAlign: "center",
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { md: 40, xs: 35 },
                  }}
                  component="div"
                >
                  1k+
                </Typography>
                <Typography variant="h5" component="div" align="center">
                  up and running
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  sx={{ letterSpacing: "6px" }}
                >
                  VENTURES
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              mb: 5,
              alignContent: "center",
            }}
          >
            <CardMedia
              image={Frame2}
              component="img"
              alt="background"
              loading="eager"
            />
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => {
                navigate("/about us");
              }}
            >
              Read More
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{ color: "white", mt: 3, position: "relative" }}
        >
          <Box
            sx={{
              display: isLg ? "none" : undefined,
              position: "absolute",
              top: 6,
              left: -50,
              width: "100%",
              height: "100.4%",
              backgroundColor: theme.palette.primary.main,
              overflow: "hidden",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              zIndex: -1,
              "&::before": {
                content: "''",
                position: "absolute",
                zIndex: -100,
                top: "-0%",
                left: "-50%",
                width: "200%",
                height: "300%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50% 50% ",
                backgroundPosition: "0 0, 100% 0, 100% 100%, 0 100%",
                backgroundImage:
                  "linear-gradient(#9747FF, #FF6B00), linear-gradient(#05FF00, #1E4705), linear-gradient(#1D4EFF, #0085FF), linear-gradient(#9B49F6, #BD00FF), linear-gradient(#FF0000, #FF7F50), linear-gradient(#FFFF00, #9ACD32), linear-gradient(#00FF00, #32CD32), linear-gradient(#00FFFF, #4682B4)",
                animation: "rotate 4s linear infinite",
              },
              "&::after": {
                content: "''",
                position: "absolute",
                zIndex: -2,
                bottom: "4px",
                left: "4px",
                width: "100% ",
                height: "99.5% ",
                background: "black",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              },
            }}
          >
            <style jsx>{`
              @keyframes rotate {
                0% {
                  transform: rotate(369deg);
                }
                100% {
                  transform: rotate(0deg);
                }
              }
            `}</style>
          </Box>
          <CardMedia
            image={ProductFamily}
            component="img"
            alt="background"
            loading="lazy"
          />
          <Grid item sm={12} md={6} sx={{ mt: 5 }} id="our-products">
            <Typography variant="hb4" component="div">
              Our Products
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                marginY: 3,
                marginBottom: 4,
                // textAlign: "justify",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              V-Marc Manufacturing Unit is well equiped with modern plant and
              machinery and have complete testing equiptment backed up with well
              qualified and trained personnel. <br /> <br />
              V-Marc 3 Core Flat Cables are used by quality conscious electrical
              contractors and recommended by leading consultants, Builders for
              projects, domestic, industrial & agricultural use.
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              alignContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Autocomplete
                freeSolo
                fullWidth
                sx={{ width: "100%", mr: 2 }}
                options={allTitles}
                inputValue={searchQuery}
                onInputChange={handleSearchChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    id="outlined-basic"
                    label="Search"
                    variant="filled"
                    color="primary"
                    onKeyPress={handleKeyPress}
                    sx={{
                      width: "100%",
                      backgroundColor: "rgba(243, 243, 243, 0.25)",
                      mr: 2,
                      "& .MuiInputLabel-root": {
                        color: "white", // Change label color
                      },
                      "& .MuiFilledInput-root:before": {
                        borderBottomColor: "rgba(0, 0, 0, 0.42)", // Bottom border color before focus
                      },
                      "& .MuiFilledInput-root:hover:before": {
                        borderBottomColor: "rgba(0, 0, 0, 0.87)", // Bottom border color on hover
                      },
                      "& .MuiFilledInput-root:after": {
                        borderBottomColor: "primary.main", // Bottom border color after focus
                      },
                    }}
                  />
                )}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleButtonClick}
              >
                <Search></Search>
              </Button>{" "}
            </Box>
          </Grid>
          {/* </Grid>
          <Grid container spacing={3} sx={{ color: "white", my: 3 }}> */}
          <Grid item sm={12}>
            <Box
              sx={{
                overflowY: "auto",
                mb: 5,
                color: "white",
                maxHeight: 700,
                ...scrollBoxStyles,
              }}
            >
              {/* <Box
              sx={{
                mb: 10,
                color: "white",
              }}
            > */}
              <Grid container spacing={3}>
                {filteredProducts.map((item, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4}>
                    <ProductCard
                      item={item}
                      category={item.category}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={item.description}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{ color: "white", mt: 1, position: "relative", mb: 5 }}
        >
          <Box
            sx={{
              display: isLg ? "none" : undefined,
              position: "absolute",
              top: 0,
              right: -50,
              width: "100%",
              height: "110%",
              backgroundColor: theme.palette.primary.main,
              overflow: "hidden",
              borderTopRightRadius: 10,
              zIndex: -1,
              "&::before": {
                content: "''",
                position: "absolute",
                zIndex: -100,
                top: "0",
                right: "-50%",
                width: "200%",
                height: "300%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50% 50% ",
                backgroundPosition: "0 0, 100% 0, 100% 100%, 0 100%",
                backgroundImage:
                  "linear-gradient(#9747FF, #FF6B00), linear-gradient(#05FF00, #1E4705), linear-gradient(#1D4EFF, #0085FF), linear-gradient(#9B49F6, #BD00FF), linear-gradient(#FF0000, #FF7F50), linear-gradient(#FFFF00, #9ACD32), linear-gradient(#00FF00, #32CD32), linear-gradient(#00FFFF, #4682B4)",
                animation: "rotate 4s linear infinite",
              },
              "&::after": {
                content: "''",
                position: "absolute",
                zIndex: -2,
                top: "4px",
                right: "4px",
                width: "100% ",
                height: "100% ",
                background: "black",
                borderTopRightRadius: 10,
              },
            }}
          >
            <style jsx>{`
              @keyframes rotate {
                0% {
                  transform: rotate(369deg);
                }
                100% {
                  transform: rotate(0deg);
                }
              }
            `}</style>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              mt: 5,
              alignItems: "center",
            }}
          >
            <Typography variant="hb4" component="div">
              Launching Soon
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              my: 5,
            }}
          >
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, rgba(252, 252, 252, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
                  width: "100px",
                  p: 8,
                }}
              >
                <CardMedia
                  image={CommingSoon1}
                  component="img"
                  alt="background"
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, rgba(252, 252, 252,  0.1) 0%, rgba(255, 255, 255, 0) 100%)",
                  width: "100px",
                  p: 5,
                }}
              >
                <CardMedia
                  image={CommingSoon2}
                  component="img"
                  alt="background"
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, rgba(252, 252, 252,  0.1) 0%, rgba(255, 255, 255, 0) 100%)",
                  width: "100px",
                  p: 5,
                }}
              >
                <CardMedia
                  image={CommingSoon3}
                  component="img"
                  alt="background"
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, rgba(252, 252, 252,  0.1) 0%, rgba(255, 255, 255, 0) 100%)",
                  width: "100px",
                  p: 5,
                }}
              >
                <CardMedia
                  image={CommingSoon3}
                  component="img"
                  alt="background"
                  loading="lazy"
                />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
