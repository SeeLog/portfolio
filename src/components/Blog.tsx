import React from "react";
import SectionBox from "./SectionBox";
import SectionDivider from "./SectionDivider";
import SectionHeader from "./SectionHeader";
import { Typography } from "@mui/material";

const Contact = () => {
  return (
    <SectionBox>
      <SectionDivider id="blog" />
      <SectionHeader variant="h2">Blog</SectionHeader>
      <Typography variant="body1">
        <a href="https://blog.seelog.me" target="_blank">
          オレオレブログを作りました。
        </a>
      </Typography>
    </SectionBox>
  );
};

export default Contact;
