import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const SectionHeader = styled(Typography)(({ theme }) => `
  padding: ${theme.spacing(4)};
  font-weight: 600;
`);

export default SectionHeader;
