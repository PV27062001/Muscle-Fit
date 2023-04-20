import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assests/icons/gym.png";

const BodyParts = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#EFD2B1",
        borderBottomLeftRadius: "20px",
        width: "250px",
        height: "250px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <Typography
        fontSize="30px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;
