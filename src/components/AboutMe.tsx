import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Typography } from "@mui/material";
import SectionBox from "./SectionBox";
import SectionDivider from "./SectionDivider";
import SectionHeader from "./SectionHeader";

interface AboutMeData {
  aboutMe: {
    caption: string;
    content: string;
    subContent: string;
  };
}

const query = graphql`
  query aboutMeQuery {
    aboutMe: aboutMeYaml {
      caption
      content
      subContent
    }
  }
`;

const AboutMe: React.FC = () => {
  const data = useStaticQuery<AboutMeData>(query);

  return (
    <SectionBox>
      <SectionDivider id="about" />
      <SectionHeader variant="h2" p={4}>About Me</SectionHeader>
      <Typography variant="body1">{data.aboutMe.content}</Typography>
      <Typography variant="body2">{data.aboutMe.subContent}</Typography>
    </SectionBox>
  );
};

export default AboutMe;
