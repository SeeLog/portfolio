import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import {
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Card,
  Box,
  Divider,
  Tag,
  CardFooter,
  CardBody,
  useColorModeValue,
} from "@chakra-ui/react";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

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

  return (
    <>
      <Divider py={10} id="works" />
      <Heading as="h2" size="2xl" p="30px">
        Works
      </Heading>
      <Text>忘れたやつは省略。他にもあったら教えて下さい。</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} p="30px">
        {data.works.nodes.map((work) => (
          <GridItem colSpan={1}>
            {work.url !== "" ? (
              <Link to={work.url} target="_blank">
                <WorkCard work={work} />
              </Link>
            ) : (
              <WorkCard work={work} />
            )}
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = (props: WorkCardProps) => {
  return (
    <Card
      _hover={{
        boxShadow: `0 0 10px 2px rgba(${useColorModeValue(
          "0, 0, 0",
          "255, 255, 255"
        )}, 0.5)`,
        transform: "translateY(-2px)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <Box width="100%">
        <GatsbyImage
          image={props.work.image.childImageSharp.gatsbyImageData}
          alt={props.work.title}
        />
      </Box>
      <CardBody px={8}>
        <Heading as="h3" size="xl" mb={2}>
          {props.work.title}
        </Heading>
        <Text fontSize="xl">{props.work.description}</Text>
      </CardBody>
      <CardFooter>
        <Box>
          {props.work.tags.map((tag) => (
            <Tag size="lg" m="5px" px="8px" py="4px" key={tag}>
              {tag}
            </Tag>
          ))}
        </Box>
      </CardFooter>
    </Card>
  );
};

export default Works;
