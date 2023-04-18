import React from "react";
import {
  Stack,
  Box,
  Typography,
  useTheme,
  Grid,
  Paper,
  Fade,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  const theme = useTheme();
  console.log(theme.palette.mode);

  return (
    <Box minHeight="100vh" minWidth="100%" id="hero">
      <IconAndName />
      <Box position="relative" width="100%" minHeight="100vh">
        <Box
          sx={{
            display: theme.palette.mode === "light" ? "block" : "none",
          }}
        >
          <StaticImage
            src="../images/hawaii.jpg"
            alt="Hawaii"
            placeholder="blurred"
            objectFit="cover"
            imgStyle={{
              width: "100%",
              height: "100vh",
            }}
            style={{
              width: "100%",
              height: "100vh",
            }}
          />
        </Box>
        <Box
          sx={{
            display: theme.palette.mode === "dark" ? "block" : "none",
          }}
        >
          <StaticImage
            src="../images/sunset.jpg"
            alt="Hawaii"
            placeholder="blurred"
            objectFit="cover"
            imgStyle={{
              width: "100%",
              height: "100vh",
            }}
            style={{
              width: "100%",
              height: "100vh",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};


const animationClassNameList = [
  "animate__bounce",
  "animate__flash",
  "animate__pulse",
  "animate__rubberBand",
  "animate__shakeX",
  "animate__shakeY",
  "animate__headShake",
  "animate__swing",
  "animate__tada",
  "animate__wobble",
  "animate__jello",
  "animate__heartBeat",
  "animate__backInDown",
  "animate__backInLeft",
  "animate__backInRight",
  "animate__backInUp",
  "animate__backOutDown",
  "animate__backOutLeft",
  "animate__backOutRight",
  "animate__backOutUp",
  "animate__bounceIn",
  "animate__bounceInDown",
  "animate__bounceInLeft",
  "animate__bounceInRight",
  "animate__bounceInUp",
  "animate__bounceOut",
  "animate__bounceOutDown",
  "animate__bounceOutLeft",
  "animate__bounceOutRight",
  "animate__bounceOutUp",
  "animate__fadeIn",
  "animate__fadeInDown",
  "animate__fadeInDownBig",
  "animate__fadeInLeft",
  "animate__fadeInLeftBig",
  "animate__fadeInRight",
  "animate__fadeInRightBig",
  "animate__fadeInUp",
  "animate__fadeInUpBig",
  "animate__fadeOut",
  "animate__fadeOutDown",
  "animate__fadeOutDownBig",
  "animate__fadeOutLeft",
  "animate__fadeOutLeftBig",
  "animate__fadeOutRight",
  "animate__fadeOutRightBig",
  "animate__fadeOutUp",
  "animate__fadeOutUpBig",
  "animate__flipInX",
  "animate__flipInY",
  "animate__flipOutX",
  "animate__flipOutY",
  "animate__lightSpeedInRight",
  "animate__lightSpeedInLeft",
  "animate__lightSpeedOutRight",
  "animate__lightSpeedOutLeft",
  "animate__rotateIn",
  "animate__rotateInDownLeft",
  "animate__rotateInDownRight",
  "animate__rotateInUpLeft",
  "animate__rotateInUpRight",
  "animate__rotateOut",
  "animate__rotateOutDownLeft",
  "animate__rotateOutDownRight",
  "animate__rotateOutUpLeft",
  "animate__rotateOutUpRight",
  "animate__hinge",
  "animate__jackInTheBox",
  "animate__rollIn",
  "animate__rollOut",
  "animate__zoomIn",
  "animate__zoomInDown",
  "animate__zoomInLeft",
  "animate__zoomInRight",
  "animate__zoomInUp",
  "animate__zoomOut",
  "animate__zoomOutDown",
  "animate__zoomOutLeft",
  "animate__zoomOutRight",
  "animate__zoomOutUp",
  "animate__slideInDown",
  "animate__slideInLeft",
  "animate__slideInRight",
  "animate__slideInUp",
  "animate__slideOutDown",
  "animate__slideOutLeft",
  "animate__slideOutRight",
  "animate__slideOutUp",
];

const IconAndName = () => {
  return (
    <Grid
      component={Paper}
      width="33%"
      maxWidth={500}
      height="100vh"
      container
      position="absolute"
      direction="column"
      alignItems="center"
      justifyContent="center"
      zIndex={1}
      top="0"
      left="0"
      elevation={0}
      sx={{
        borderRadius: "0",
      }}
    >
      <Box textAlign="center">
        <Typography
          variant="body2"
          position="absolute"
          left="50%"
          sx={{
            transform: "translateX(-50%)",
          }}
        >
          Click Me!!
        </Typography>
        <Box
          id="icon"
          padding="2rem"
          sx={{
            transition: "all 0.3s ease-in-out",
            ":hover": {
              transform: "scale(1.1)",
              filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25))",
              cursor: "pointer",
            },
          }}
          onClick={() => {
            // random animation
            const icon = document.getElementById("icon");
            const animationClassName =
              animationClassNameList[
                Math.floor(Math.random() * animationClassNameList.length)
              ];
            icon?.classList.add("animate__animated", animationClassName);
            setTimeout(() => {
              icon?.classList.remove("animate__animated", animationClassName);
            }, 1000);
          }}
        >
          <StaticImage
            src="../images/icon.png"
            alt="icon"
            objectFit="cover"
            style={{
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>
      <Box>
        <Typography
          fontWeight={700}
          sx={{
            typography: {
              md: "h2",
              sm: "h3",
              xs: "h4",
            },
            paddingBottom: "1rem",
            ":hover": {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-in-out",
              filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25))",
            },
          }}
        >
          ろぐみ
        </Typography>
      </Box>
      <Box>
        <Typography
          fontWeight={400}
          lineHeight={"110%"}
          sx={{
            typography: {
              md: "h3",
              sm: "h4",
              xs: "h5",
            },
          }}
        >
          SeeLog
        </Typography>
      </Box>
    </Grid>
  );
};

export default Hero;
