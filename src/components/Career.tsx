import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Divider,
  Heading,
  Text,
  Grid,
  GridItem,
  Tag,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import TimelineItem from "./TimelineItem";

interface CareerData {
  careers: {
    nodes: {
      year: number;
      contents: {
        month: number;
        content: string;
      }[];
    }[];
  };
}

const query = graphql`
  query careerQuery {
    careers: allCareersYaml {
      nodes {
        year
        contents {
          month
          content
        }
      }
    }
  }
`;

const Careers: React.FC = () => {
  const data = useStaticQuery<CareerData>(query);
  let timelineCount = 0;

  return (
    <>
      <Divider my={10} />
      <Heading as="h2" size="2xl" p="30px">
        Career
      </Heading>
      {data.careers.nodes.map((career) => (
        <>
          <Heading as="h3" size="xl" color="blue.400" my="10">
            {career.year !== 0 && career.year}
            {career.year === 0 && "Now"}
          </Heading>
          {career.year !== 0 &&
            career.contents.map((content) => (
              <TimelineItem
                key={content.month.toString()}
                month={content.month.toString()}
                content={content.content}
                isLeft={timelineCount++ % 2 === 0}
              />
            ))}
          {career.year === 0 && (
            <Box
              p={{ base: 3, sm: 6 }}
              rounded="lg"
              bg={useColorModeValue("orange.100", "purple.900")}
            >
              {career.contents.map((content) => (
                <Text fontSize="xl">{content.content}</Text>
              ))}
            </Box>
          )}
        </>
      ))}
    </>
  );
};

export default Careers;
