import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assests/images/banner2.png";
import Nutrition from "../pages/Nutrition";

const HeroBanner = () => {
  return (
    <>
      <Box
        position="relative"
        p="20px"
        sx={{
          mt: { lg: "220px", xs: "70px" },
          ml: { sm: "50px" },
        }}
      >
        <Typography color="warning" fontWeight="600" fontSize="26px">
          
          MUSCLE FIT
        </Typography>
        <Typography
          fontWeight="700"
          sx={{
            fontSize: {
              lg: "44px",
              xs: "40px",
              mb: "50px",
            },
          }}
          mb="23px"
          mt="30px"
        >
          {/* Work Hard, Sleep <br /> Repeat */}
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3}>
          Let's see what you're working on today!
        </Typography>
        <Button
          variant="contained"
          color="warning"
          href="/Exercise"
          sx={{
            bgcolor: "warning.main",
            padding: "10px",
          }}
        >
          Explore Exercises
        </Button>
        <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
      </Box>
    </>
  );
};

export default HeroBanner;
