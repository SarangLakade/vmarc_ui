import * as React from "react";
import Button from "@mui/material/Button";
import {
  Typography,
  Grid,
  Container,
  Box,
  CardMedia,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  styled,
} from "@mui/material";
import backgroundImage from "../img/earth1.png";
import { InfoOutlined, Download, ContactMail } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";
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

const ProductPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [age, setAge] = React.useState("");

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
            md={6}
            sx={{
              mt: 20,
              color: "white",
            }}
          >
            <Box mb={10}>
              <Box>
                <Button variant="contained" color="primary">
                  Cable
                </Button>
              </Box>
              <Box mb={2} mt={1}>
                <Typography variant="hb4">LAN Cables</Typography>
              </Box>
              <Typography variant="h5">
                A LAN cable is a conductor that connects devices in a Local Area
                Network (LAN) with a network connector. The network cable
                provides communication between several devices (computers,
                routers, switches,…).
              </Typography>
            </Box>
            <Box
              mt={2}
              display="flex"
              flexBasis={"row"}
              alignItems="center" // This aligns items vertically center
              justifyContent={"space-between"}
            >
              <StandardsComponent
                title={"Standards"}
                description={"IS-1554 (Part -1) 1988"}
              />
              <StandardsComponent
                title={"Conductor"}
                description={"Solid Bare Copper"}
              />
              <StandardsComponent
                title={"Insulation"}
                description={"High Density Polyethylene"}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<ContactMail />}
                sx={{ px: 5 }}
              >
                Contact
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Download />}
                sx={{ px: 10 }}
              >
                Download Brochure
              </Button>
            </Box>
          </Grid>
          <Grid item xs={0} md={2}></Grid>
          <Grid
            item
            xs={12}
            md={4}
            mt={20}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "Center",
              alignItems: "center",
              color: "white",
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              // width={100}
              // height={100}
              image={require("../img/prodact_right.png")}
              sx={{ objectFit: "contain" }}
            />
            {/* <FormControl
              fullWidth
              sx={{
                mt: 2,
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                // "& .MuiSelect-root": {
                //   color: theme.palette.text.primary,
                // },
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Change Variants
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                sx={{ border: "1px solid #ffff" }}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl> */}
          </Grid>
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
            <Typography
              variant="h4"
              fontWeight={600}
              textAlign={"left"}
              sx={{ my: 2 }}
            >
              Description
            </Typography>
            <Typography
              textAlign={"left"}
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              The most acceptable metals for wires & cables are copper and
              aluminum due to their higher conductivity & ductility. Copper has
              higher affinity for Sulphur it corrodes in the atmosphere where
              Sulphur fumes is present. In these conditions tinned copper should
              be used as it forms a protective film over it & prevents it from
              tarnishing.
              <br />
              <br /> Aluminum oxide film present on the surface of aluminum
              conductor acts as a barrier to protect it from corrosion.
              CONDUCTOR CONSTRUCTION The most economical construction for
              conductor is solid conductor i.e. conductor made of one single
              wire. As the area of conductor increases, solid conductor becomes
              stiffer and difficult to handle, therefore stranded construction
              is adopted.
              <br />
              <br /> Here the conductor is made of number of strands. The
              strands are arranged in spiral layers in 1+6+12+18+…… formations.
              This geometrical progression of strands provides more compactness
              & flexibility. The stranded construction of conductors is more
              suitable for crimping of lugs. To economize the weight of
              insulating material, to optimize overall diameter, conductors are
              shaped & compacted in higher sized cables.
              <br />
              <br /> The stranded conductor is shaped in to a segment of a
              circle so that when all the cores are laid, they form a complete
              circle. These segments are identified as 2 Core- 180 degrees, 3
              Core- 120 degrees, 4 Core- 90 degrees, 3.5 Core- 100/60 degrees.
              IS 1554 permits solid conductor construction up to 10 sqmm in
              aluminium and up to 6 sqmm in copper. It permits the use of shaped
              conductors for size from 16 sqmm onwards.
            </Typography>
          </Grid>
        </Grid>
      </Container>
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
              <Typography
                variant="h4"
                fontWeight={600}
                textAlign={"left"}
                sx={{ my: 2 }}
              >
                Laying Up
              </Typography>
              <Typography
                textAlign={"left"}
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                The cores are laid up with suitable lay. The final layer always
                has a right hand lay i.e. if you look along the cable, the cores
                move to your right hand or clock wise.{" "}
              </Typography>
              <Typography
                variant="h4"
                fontWeight={600}
                textAlign={"left"}
                sx={{ my: 2 }}
              >
                Inner sheath
              </Typography>
              <Typography
                textAlign={"left"}
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Inner sheath is provided over the laid-up cores. It is provided
                to give circular shape to the cable and it provides bedding for
                the armouring. I.S. 1554 permits following two methods of
                applying the inner sheath of any thermoplastic material i.e.
                PVC.
                <br />
                <br /> Extruded Inner Sheath: It is provided by extrusion of
                thermoplastic material over the laid-up cores. This type of
                inner sheath also acts as a water barrier between cores and
                outer sheath. Is case of a puncture in the outer sheath water
                cannot reach to the cores and hence we recommend that cables for
                outdoor underground uses should have extruded inner sheath.
                Taped Inner Sheath: It is provided by wrapping a thermoplastic
                tape over the laid-up cores. This method saves a process and
                hence manufactures always provide this type of inner sheath
                unless the purchase specifications ask for extruded inner
                sheath.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ProductPage;
