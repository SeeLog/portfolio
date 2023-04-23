import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import SectionDivider from "./SectionDivider";
import SectionHeader from "./SectionHeader";
import SectionBox from "./SectionBox";
import SkillsRow from "./SkillsRow";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionBox>
      <SectionDivider
        id="skills"
        sx={{
          width: "80%",
          marginX: "auto",
        }}
      />
      <SectionHeader variant="h2">Skills</SectionHeader>
      <Box width="100%">
        <Grid
          container
          spacing={isMobile ? 0 : 4}
          sx={{
            textAlign: "left",
            maxWidth: "80%",
            margin: "0 auto",
          }}
          justifyContent="center"
          alignItems="center"
        >
          {data.skills.nodes.map((skill) => (
            <SkillsRow category={skill.category} skillList={skill.skillList} />
          ))}
        </Grid>
      </Box>
    </SectionBox>
  );
};

export default Skills;
