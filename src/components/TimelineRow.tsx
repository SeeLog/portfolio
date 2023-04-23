import React from "react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { timelineColorList } from "./Timeline";
import SectionHeader from "./SectionHeader";

export interface TimelineRowProps {
  year: string;
  month: string;
  content: string;
  contentCount: number;
}

const TimelineRow: React.FC<TimelineRowProps> = ({
  year,
  month,
  content,
  contentCount,
}) => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    // animation options
    rootMargin: "-50px",
    triggerOnce: true,
  });
  const isSingleColumn = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <TimelineItem
        sx={{
          minWidth: isSingleColumn ? "100%" : "80%",
          marginX: "auto",
        }}
        ref={ref}
      >
        <TimelineOppositeContent
          sx={{
            margin: "auto 0",
          }}
          className={
            inView
              ? contentCount % 2 === 0
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
              : ""
          }
          display={isSingleColumn ? "none" : "block"}
        >
          <SectionHeader variant="h4">{month}月</SectionHeader>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            color={timelineColorList[contentCount % timelineColorList.length]}
          />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent
          sx={{
            maxWidth: isSingleColumn ? "100%" : "80%",
          }}
        >
          <Paper
            className={
              inView
                ? contentCount % 2 === 0 || isSingleColumn
                  ? "animate__animated animate__fadeInRight"
                  : "animate__animated animate__fadeInLeft"
                : ""
            }
            elevation={3}
            sx={{
              padding: "2rem",
              textAlign: "left",
              borderBottomWidth: "0.5rem",
              borderBottomColor:
                theme.palette[
                  timelineColorList[contentCount % timelineColorList.length]
                ].main,
            }}
          >
            {isSingleColumn && (
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  mb: "1rem",
                }}
              >
                {year}年{month}月
              </Typography>
            )}
            <Typography variant="body1">{content}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

export default TimelineRow;
