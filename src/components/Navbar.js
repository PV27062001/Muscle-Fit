import React from "react";
import { Link } from "react-router-dom";
import { Stack,Button } from "@mui/material";
import Logo from "../assests/images/Logo.png";
import { Box } from "@mui/system";
import { blue } from "@mui/material/colors";

const Navbar = () => {
  return (
    <Box
      bgcolor="#E83E3E"
      px="25px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="2px"
      >
        <Stack
          direction="row"
          gap="40px"
          fontSize="24px"
          alignItems="center"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            Home
          </Link>
          <a
            href="/Exercise"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            Exercises
          </a>
          <Link
            to="/Bmi2"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            Bmi
          </Link>
          <Link
            to="/nutrition"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            Nutrition
          </Link>
          <Link
            to="/RecipeSearch"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            Ingredients
          </Link>
        </Stack>
      </Stack>
      <Button
        variant="outlined"
        onClick={() => window.history.back()}
        sx={{
          color: blue[500],
          marginRight: "20px",
          backgroundColor: "White",
          "&:hover": {
            backgroundColor: blue[50],
          },
        }}
      >
        Back
      </Button>

    </Box>
  );
};

export default Navbar;
