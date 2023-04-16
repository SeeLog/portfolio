import React from "react";
import { Divider, Heading, Button, Icon, Stack } from "@chakra-ui/react";
import { SiZenn, SiQiita, SiDiscord, SiGithub, SiTwitter } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <Divider py={10} id="contact" />
      <Heading as="h2" size="2xl" p="30px">
        Contact
      </Heading>
      <Stack direction="row" spacing={4} align="center">
        <Button
          as="a"
          href="https://github.com/SeeLog"
          target="_blank"
          size="lg"
        >
          <Icon as={SiGithub} boxSize="8" />
        </Button>
        <Button
          as="a"
          href="https://qiita.com/SeeLog"
          target="_blank"
          size="lg"
        >
          <Icon as={SiQiita} boxSize="16" />
        </Button>
        <Button as="a" href="https://zenn.dev/seelog" target="_blank" size="lg">
          <Icon as={SiZenn} boxSize="8" />
        </Button>
        <Button
          as="a"
          href="https://discordapp.com/users/317944412028010497"
          target="_blank"
          size="lg"
        >
          <Icon as={SiDiscord} boxSize="8" />
        </Button>
        <Button
          as="a"
          href="https://twitter.com/seeloglog"
          target="_blank"
          size="lg"
        >
          <Icon as={SiTwitter} boxSize="8" />
        </Button>
      </Stack>
    </>
  );
};

export default Contact;
