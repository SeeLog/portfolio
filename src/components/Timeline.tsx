import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import SectionDivider from "./SectionDivider";
import SectionHeader from "./SectionHeader";
import SectionBox from "./SectionBox";
import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import TimelineRow from "./TimelineRow";
import { useInView } from "react-intersection-observer";

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

export const timelineColorList = [
  "secondary",
  "success",
  "info",
  "warning",
  "error",
] as const;

const Timeline: React.FC = () => {
  const theme = useTheme();
  const data = useStaticQuery<TimelineData>(query);
  let contentCount = 0;
  const { ref, inView } = useInView({
    // animation options
    rootMargin: "-50px",
    triggerOnce: true,
  });
  const isSingleColumn = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionBox>
      <SectionDivider id="timeline" />
      <SectionHeader variant="h2">Timeline</SectionHeader>
      <MuiTimeline
        position={isSingleColumn ? "right" : "alternate"}
        sx={{
          width: isSingleColumn ? "100%" : "80%",
          marginX: "auto",
        }}
      >
        {data.timeline.nodes.slice(0, -1).map((timeline) => (
          <>
            <TimelineItem
              sx={{
                display: isSingleColumn ? "none" : "block",
              }}
            >
              <TimelineSeparator>
                <SectionHeader variant="h3">{timeline.year}</SectionHeader>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
            {
              // This is a hack to make the timeline look better
            }
            <TimelineItem
              sx={{
                display: "none",
              }}
            />
            {timeline.contents.map((content) => (
              <>
                <TimelineRow
                  year={timeline.year.toString()}
                  month={content.month.toString()}
                  content={content.content}
                  contentCount={contentCount}
                />
                {contentCount++ ? undefined : undefined}
              </>
            ))}
          </>
        ))}
      </MuiTimeline>
      <Box ref={ref}>
        <div className={inView ? "animate__animated animate__fadeInUp" : ""}>
          <SectionHeader variant="h3">Now</SectionHeader>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem",
              textAlign: "left",
              width: isSingleColumn ? "calc(100% - 2rem)" : "calc(80% - 2rem)",
              marginX: "auto",
              borderBottomWidth: "0.5rem",
              borderBottomColor:
                theme.palette[
                  timelineColorList[contentCount % timelineColorList.length]
                ].main,
            }}
          >
            <Typography variant="body1">
              {data.timeline.nodes.slice(-1)[0].contents[0].content}
            </Typography>
          </Paper>
        </div>
      </Box>
    </SectionBox>
  );
};

export default Timeline;
