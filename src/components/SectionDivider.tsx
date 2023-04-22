import { styled } from "@mui/system";
import { Divider } from "@mui/material";

const SectionDivider = styled(Divider)(({ theme }) => `
  margin-top: ${theme.spacing(10)};
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
`);

export default SectionDivider;
