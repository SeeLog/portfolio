import React from "react";
import {
  SiZenn,
  SiQiita,
  SiDiscord,
  SiGithub,
  SiTwitter,
  SiLinkedin,
  SiWantedly,
} from "react-icons/si";
import SectionBox from "./SectionBox";
import SectionDivider from "./SectionDivider";
import SectionHeader from "./SectionHeader";
import { Button } from "@mui/material";

const iconSize = 64;

const Contact = () => {
  return (
    <SectionBox>
      <SectionDivider id="contact" />
      <SectionHeader variant="h2">Contact</SectionHeader>
      <Button href="https://github.com/SeeLog" target="_blank" color="inherit">
        <SiGithub size={iconSize} />
      </Button>
      <Button href="https://wantedly.com/id/seelog" target="_blank" color="inherit">
        <SiWantedly size={iconSize} />
      </Button>
      <Button href="https://linkedin.com/in/seelog" target="_blank" color="inherit">
        <SiLinkedin size={iconSize} />
      </Button>
      <Button href="https://qiita.com/SeeLog" target="_blank" color="inherit">
        <SiQiita size={iconSize} />
      </Button>
      <Button href="https://zenn.dev/seelog" target="_blank" color="inherit">
        <SiZenn size={iconSize} />
      </Button>
      <Button
        href="https://discordapp.com/users/317944412028010497"
        target="_blank"
        color="inherit"
      >
        <SiDiscord size={iconSize} />
      </Button>
      <Button href="https://twitter.com/seeloglog" target="_blank"  color="inherit">
        <SiTwitter size={iconSize} />
      </Button>
    </SectionBox>
  );
};

export default Contact;
