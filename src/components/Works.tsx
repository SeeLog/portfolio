import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
} from "@chakra-ui/react";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

interface WorksData {
  works: {
    nodes: {
      title: string;
      description: string;
      url: string;
      image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
      tags: string[];
    }[];
  };
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
      <Divider my={10} />
      <Heading as="h2" size="2xl" p="30px">
        Works
      </Heading>
      <Text>忘れたやつは省略。他にもあったら教えて下さい。</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} p="30px">
        {data.works.nodes.map((work) => (
          <GridItem colSpan={1}>
            <Card>
              <Box width="100%">
                <GatsbyImage
                  image={work.image.childImageSharp.gatsbyImageData}
                  alt={work.title}
                />
              </Box>
              <CardBody px={8}>
                <Heading as="h3" size="xl" mb={2}>
                  {work.title}
                </Heading>
                <Text fontSize="xl">{work.description}</Text>
              </CardBody>
              <CardFooter>
                <Box>
                  {work.tags.map((tag) => (
                    <Tag size="lg" m="5px" px="8px" py="4px" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </Box>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Works;
