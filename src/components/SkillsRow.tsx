import React from "react";
import {
  Grid,
  Typography,
  Box,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useInView } from "react-intersection-observer";

interface SkillsRowProps {
  category: string;
  skillList: string[];
}

const SkillsRow: React.FC<SkillsRowProps> = ({ category, skillList }) => {
  const { ref, inView } = useInView({
    // animation options
    rootMargin: "-50px",
    triggerOnce: true,
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid item sm={12} md={6}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              textAlign: isMobile ? "center" : "left",
              width: "100%",
            }}
            className={inView ? "animate__animated animate__fadeInLeft" : ""}
          >
            {category}
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={12} md={6}>
        <Box ref={ref}>
          {skillList.map((skill) => (
            <Chip
              color="primary"
              variant="outlined"
              className={inView ? "animate__animated animate__fadeInLeft" : ""}
              sx={{
                fontSize: isMobile ? "1rem" : "1.5rem",
                padding: isMobile ? "0.25rem 0.5rem" : "0.5rem 1rem",
                marginX: "0.25rem",
                marginY: "0.25rem",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                },
              }}
              label={skill}
            />
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default SkillsRow;
