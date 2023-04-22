import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import SectionDivider from "./SectionDivider";
import SectionHeader from "./SectionHeader";
import SectionBox from "./SectionBox";
import { Paper, Typography, useTheme } from "@mui/material";

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

const colorList = ["secondary", "success", "info", "warning", "error"] as const;

// TODO: Add animation
const Timeline: React.FC = () => {
  const theme = useTheme();
  const data = useStaticQuery<TimelineData>(query);
  let contentCount = 0;

  return (
    <SectionBox>
      <SectionDivider id="timeline" />
      <SectionHeader variant="h2">Timeline</SectionHeader>
      <MuiTimeline position="alternate">
        {data.timeline.nodes.slice(0, -1).map((timeline) => (
          <>
            <TimelineItem>
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
              <TimelineItem
                sx={{
                  width: "80%",
                  marginX: "auto",
                }}
              >
                <TimelineOppositeContent
                  sx={{
                    margin: "auto 0",
                  }}
                >
                  <SectionHeader variant="h4">{content.month}月</SectionHeader>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    color={colorList[contentCount % colorList.length]}
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "2rem",
                      textAlign: "left",
                      borderBottomWidth: "0.5rem",
                      borderBottomColor:
                        theme.palette[
                          colorList[contentCount % colorList.length]
                        ].main,
                    }}
                  >
                    <Typography variant="body1">{content.content}</Typography>
                  </Paper>
                </TimelineContent>
                {contentCount++ ? undefined : undefined}
              </TimelineItem>
            ))}
          </>
        ))}
        <SectionHeader variant="h3">Now</SectionHeader>
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            textAlign: "left",
            width: "calc(80% - 2rem)",
            marginX: "auto",
            borderBottomWidth: "0.5rem",
            borderBottomColor:
              theme.palette[colorList[contentCount % colorList.length]].main,
          }}
        >
          <Typography variant="body1">
            {data.timeline.nodes.slice(-1)[0].contents[0].content}
          </Typography>
        </Paper>
      </MuiTimeline>
    </SectionBox>
  );
};

export default Timeline;
