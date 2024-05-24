import React from "react";
import {
  Card,
  Button,
  Box,
  Typography,
  CardContent,
  IconButton,
  Tabs,
  Tab,
  CustomTabPanel,
} from "@mui/material";
import theme from "../theme";
import CommitteeMemberCard from "./CommitteeMemberCard";
import VisibilityIcon from "@mui/icons-material/Visibility";

const CustomListCard = ({ title, list, singlechild, large, pdf }) => {
  const handleOpenPDF = (link) => {
    console.log("Box clicked:", link);

    window.open(link, "_blank");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          justifyItems: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.secondary.main,
            width: 400,
            borderRadius: "10px 10px 0px 0px",
            py: 1,
          }}
        >
          <Typography variant="h4" sx={{ color: "#FFFF" }}>
            {title}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: singlechild ? 0 : "10px 0 10px 10px",
          border: `2px solid ${singlechild ? "#0000" : "#363636"}`,
          backgroundColor: singlechild
            ? "rgba(255, 255, 255, 0.08)"
            : "transperent",
          mb: 4,
        }}
      >
        {list.map((member, index) => (
          <Box
            sx={{
              borderBottom:
                index === list.length - 1 ? "none" : "3px solid #363636",
            }}
          >
            {singlechild ? (
              pdf ? (
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      bgcolor: "#363636",
                      color: "#8EA1FF",
                      "&:hover": {
                        bgcolor: "white",
                        color: theme.palette.secondary.main,
                      },
                    }}
                    startIcon={<VisibilityIcon />}
                    onClick={() => handleOpenPDF(member.link)}
                    rel="noopener noreferrer"
                  >
                    View PDF
                  </Button>
                </Box>
              ) : (
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: large ? 24 : 16,
                      fontWeight: 400,
                      textAlign: "left",
                      p: 2,
                      color: large ? "#fff" : "#B8B8B8",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Box sx={{ p: 1 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        bgcolor: "#363636",
                        color: "#8EA1FF",
                        "&:hover": {
                          bgcolor: "white",
                          color: theme.palette.secondary.main,
                        },
                      }}
                      startIcon={<VisibilityIcon />}
                      onClick={() => handleOpenPDF(member.link)}
                      rel="noopener noreferrer"
                    >
                      View PDF
                    </Button>
                  </Box>
                </Box>
              )
            ) : (
              <CommitteeMemberCard
                key={index}
                name={member.name}
                position={member.position}
                designation={member.designation}
              />
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CustomListCard;
