import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Divider, Heading, Text } from "@chakra-ui/react";

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
    <>
      <Divider py={10} id="about" />
      <Heading as="h2" size="2xl" p="30px">
        About Me
      </Heading>
      <Text fontSize="2xl">{data.aboutMe.content}</Text>
      <Text fontSize="xl">{data.aboutMe.subContent}</Text>
    </>
  );
};

export default AboutMe;
