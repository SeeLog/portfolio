import React from "react";
import SectionBox from "./SectionBox";
import SectionDivider from "./SectionDivider";
import { Paper, Link, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <SectionBox>
      <Paper elevation={0}>
        <SectionDivider />
        <Box py={4}>
        <Typography fontSize="lg">
          © 2010 - 2023 <Link href="https://github.com/SeeLog">SeeLog</Link> All
          Rights Reserved.
        </Typography>
        </Box>
      </Paper>
    </SectionBox>
  );
};

export default Footer;
