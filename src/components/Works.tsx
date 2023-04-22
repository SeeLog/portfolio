import React, { useContext } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";
import { useTheme } from "@emotion/react";
import SectionBox from "./SectionBox";
import SectionDivider from "./SectionDivider";
import SectionHeader from "./SectionHeader";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import ColorModeContext from "../context/ColorModeContext";
import { useInView } from "react-intersection-observer";

interface WorksData {
  works: {
    nodes: Work[];
  };
}

interface Work {
  title: string;
  description: string;
  url: string;
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  tags: string[];
}

const query = graphql`
  query worksQuery {
    works: allWorksYaml {
      nodes {
        title
        description
        url
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        tags
      }
    }
  }
`;

const Works: React.FC = () => {
  const data = useStaticQuery<WorksData>(query);
  const theme = useTheme();

  return (
    <SectionBox width="80%">
      <SectionDivider id="works" />
      <SectionHeader variant="h2">Works</SectionHeader>
      <Typography variant="body1" mb={4}>
        忘れたやつは省略。他にもあったら教えて下さい。
      </Typography>
      <Grid container spacing={4} justifyContent="center" mx="auto">
        {data.works.nodes.map((work) => (
          <Grid item xs={12} sm={12} md={6} xl={4}>
            {work.url !== "" ? (
              <Link to={work.url} target="_blank">
                <WorkCard work={work} />
              </Link>
            ) : (
              <WorkCard work={work} />
            )}
          </Grid>
        ))}
      </Grid>
    </SectionBox>
  );
};

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = (props: WorkCardProps) => {
  const { getColorWithMode } = useContext(ColorModeContext);
  const { ref, inView } = useInView({
    // animation options
    rootMargin: "-300px",
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView && (
        <Card
          className="animate__animated animate__bounceIn"
          sx={{
            ":hover": {
              boxShadow: `0 0 10px 2px rgba(${getColorWithMode(
                "0, 0, 0",
                "255, 255, 255"
              )}, 0.5)`,
              transform: "translateY(-2px)",
              transition: "all 0.2s ease-in-out",
            },
          }}
        >
          <CardMedia>
            <GatsbyImage
              image={props.work.image.childImageSharp.gatsbyImageData}
              alt={props.work.title}
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h3" mb={2}>
              {props.work.title}
            </Typography>
            <Typography variant="body1">{props.work.description}</Typography>
            <Box>
              {props.work.tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </Box>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Works;
