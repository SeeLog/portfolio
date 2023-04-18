import React from "react";
import { Grid, Typography, Box, Chip } from "@mui/material";
import { useInView } from "react-intersection-observer";

interface SkillsRowProps {
  category: string;
  skillList: string[];
}

const SkillsRow: React.FC<SkillsRowProps> = ({ category, skillList }) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: false, // 最初の一度だけ実行
  });
  return (
    <>
      <Grid item xs={6}>
        {inView && (
          <Typography
            variant="h3"
            className="animate__animated animate__fadeInLeft"
          >
            {category}
          </Typography>
        )}
      </Grid>
      <Grid item xs={6}>
        <Box ref={ref}>
          {inView &&
            skillList.map((skill) => (
              <Chip
                color="primary"
                variant="outlined"
                className="animate__animated animate__fadeInLeft"
                sx={{
                  fontSize: "1.5rem",
                  padding: "1rem 1rem",
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
