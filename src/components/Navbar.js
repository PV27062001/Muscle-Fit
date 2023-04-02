// import React from "react";
// import { Link } from "react-router-dom";
// import { Stack } from "@mui/material";
// import Logo from "../assests/images/Logo.png";
// import { Box } from "@mui/system";

// const Navbar = () => {
//   return (
//     <Stack
//       direction="row"
//       justifyContent="space-around"
//       sx={{
//         gap: {
//           // sm: "122px",
//           // xs: "40px",
//         },
//         mt: {
//           sm: "32px",
//           xs: "20px",
//         },
//         justifyContent: "none",
//       }}
//       px="25px"
//     >
//       <Link to="/">
//         <img
//           src={Logo}
//           alt="logo"
//           style={{
//             width: "48px",
//             height: "48px",
//             margin: "0 20px",
//           }}
//         />
//       </Link><Box mt="40px" bgcolor="#FF0000">
//     <Stack
//       gap="40px"
//       sx={{ alignItems: "center" }}
//       flexWrap="wrap"
//       px="40px"
//       pt="2px"
//     >    
//       <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end" >
     
//         <Link
//           to="/"
//           color=""
//           style={{
//             textDecoration: "none",
//             color: " #ffffff",
//           }}
//         >
//           Home
//         </Link>

//         <a
//           href="/Exercise"
//           style={{
//             textDecoration: "none",
//             color: "#ffffff",

//           }}
//         >
//           Exercises
//         </a>
//         <Link
//           to="/Bmi2"
//           style={{
//             textDecoration: "none",
//             color: "#ffffff",
//           }}
//         >
//          Bmi
//         </Link>
//       </Stack>
//     </Stack> 
//     </Box>
//     </Stack>
    
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Stack } from "@mui/material";
// import Logo from "../assests/images/Logo.png";
// import { Box } from "@mui/system";

// const Navbar = () => {
//   return (
//     <Box
//       bgcolor="#E83E3E"
//       px="25px"
//       display="flex"
//       justifyContent="space-between"
//       alignItems="center"
//     >
//       {/* <Link to="/">
//         <img
//           src={Logo}
//           alt="logo"
//           style={{
//             width: "48px",
//             height: "48px",
//             margin: "0 20px",
//           }}
//         />
//       </Link> */}
//       <button onClick={() => window.history.back()}>Back</button>
//       <Stack
//         gap="40px"
//         sx={{ alignItems: "center" }}
//         flexWrap="wrap"
//         px="40px"
//         pt="2px"
//       >
//         <Stack
//           direction="row"
//           gap="40px"
//           fontSize="24px"
//           alignItems="center"
//         >
//           <Link
//             to="/"
//             style={{
//               textDecoration: "none",
//               color: "#FFFFFF",
//             }}
//           >
//             Home
//           </Link>
//           <a
//             href="/Exercise"
//             style={{
//               textDecoration: "none",
//               color: "#FFFFFF",
//             }}
//           >
//             Exercises
//           </a>
//           <Link
//             to="/Bmi2"
//             style={{
//               textDecoration: "none",
//               color: "#FFFFFF",
//             }}
//           >
//             Bmi
//           </Link>
//           <Link
//             to="/nutrition"
//             style={{
//               textDecoration: "none",
//               color: "#FFFFFF",
//             }}
//           >
//             Nutrition
//           </Link>
//           <Link
//             to="/RecipeSearch"
//             style={{
//               textDecoration: "none",
//               color: "#FFFFFF",
//             }}
//           >
//             Diet Foods
//           </Link>
//         </Stack>
//       </Stack>
//     </Box>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
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
      <Link to="#" onClick={() => window.history.back()} style={{boxSizing: "5px", textDecoration: "none", color: blue, marginLeft: "20px" }}>
        Back
      </Link>
    </Box>
  );
};

export default Navbar;
