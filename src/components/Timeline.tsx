import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Divider,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import TimelineItem from "./TimelineItem";

interface TimelineData {
  timeline: {
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
  query timelineQuery {
    timeline: allTimelineYaml {
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

const Timeline: React.FC = () => {
  const data = useStaticQuery<TimelineData>(query);
  let timelineCount = 0;

  return (
    <>
      <Divider py={10} id="timeline" />
      <Heading as="h2" size="2xl" p="30px">
        Timeline
      </Heading>
      {data.timeline.nodes.map((timeline) => (
        <>
          <Heading as="h3" size="xl" color="blue.400" my="10">
            {timeline.year !== 0 && timeline.year}
            {timeline.year === 0 && "Now"}
          </Heading>
          {timeline.year !== 0 &&
            timeline.contents.map((content) => (
              <TimelineItem
                key={content.month.toString()}
                month={content.month.toString()}
                content={content.content}
                isLeft={timelineCount++ % 2 === 0}
              />
            ))}
          {timeline.year === 0 && (
            <Box
              p={{ base: 3, sm: 6 }}
              rounded="lg"
              bg={useColorModeValue("orange.100", "purple.900")}
            >
              {timeline.contents.map((content) => (
                <Text fontSize="xl">{content.content}</Text>
              ))}
            </Box>
          )}
        </>
      ))}
    </>
  );
};

export default Timeline;
