import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Divider, Heading, Text, Grid, GridItem, Tag } from "@chakra-ui/react";

interface SkillsData {
  skills: {
    nodes: {
      category: string;
      skillList: string[];
    }[];
  };
}

const query = graphql`
  query skillQuery {
    skills: allSkillsYaml {
      nodes {
        category
        skillList
      }
    }
  }
`;

const Skills: React.FC = () => {
  const data = useStaticQuery<SkillsData>(query);

  return (
    <>
      <Divider py={10} id="skills" />
      <Heading as="h2" size="2xl" p="30px">
        Skills
      </Heading>
      {data.skills.nodes.map((skill) => (
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          p="30px"
          textAlign="left"
        >
          <GridItem colSpan={1}>
            <Heading as="h3" size="xl">
              {skill.category}
            </Heading>
          </GridItem>
          <GridItem colSpan={1}>
            {skill.skillList.map((skill) => (
              <Tag
                fontSize="2xl"
                size="lg"
                m="5px"
                px="8px"
                py="4px"
                variant="outline"
                colorScheme="orange"
                key={skill}
              >
                {skill}
              </Tag>
            ))}
          </GridItem>
        </Grid>
      ))}
    </>
  );
};

export default Skills;
