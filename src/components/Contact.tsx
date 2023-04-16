import React from "react";
import { Divider, Heading, Button, Icon, Stack } from "@chakra-ui/react";
import { SiZenn, SiQiita } from "react-icons/si";
import { FaGithub, FaTwitter } from "react-icons/fa";

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
          <Icon as={FaGithub} boxSize="6" />
        </Button>
        <Button
          as="a"
          href="https://qiita.com/SeeLog"
          target="_blank"
          size="lg"
        >
          <Icon as={SiQiita} boxSize="6" />
        </Button>
        <Button as="a" href="https://zenn.dev/seelog" target="_blank" size="lg">
          <Icon as={SiZenn} boxSize="6" />
        </Button>
        <Button
          as="a"
          href="https://twitter.com/seeloglog"
          target="_blank"
          size="lg"
        >
          <Icon as={FaTwitter} boxSize="6" />
        </Button>
      </Stack>
    </>
  );
};

export default Contact;
