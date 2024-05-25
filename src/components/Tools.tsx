import React from 'react';
import SectionBox from './SectionBox';
import SectionDivider from './SectionDivider';
import SectionHeader from './SectionHeader';
import { Typography } from '@mui/material';

export const Tools = () => {
  return (
    <SectionBox>
      <SectionDivider id="tools" />
      <SectionHeader variant="h2">Tools</SectionHeader>
      <Typography variant="body1">
        <a href="https://tools.seelog.me" target="_blank">
          ろぐみお手製の様々な Web ツールはこちら
        </a>
      </Typography>
    </SectionBox>
  );
};
