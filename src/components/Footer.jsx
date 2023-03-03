import {
  ButtonGroup,
  IconButton,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <Container
      maxW="container.xl"
      bg="green.400"
      color="#262626"
      borderRadius="10"
      padding={8}
      marginTop={5}
    >
      <Stack justify="center" direction="row" display="flex" marginBottom={5}>
        <ButtonGroup variant="ghost">
          <IconButton
            target="_blank"
            as="a"
            href="https://www.linkedin.com/in/sefa-sariteke-787b8b129/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            target="_blank"
            as="a"
            href="https://github.com/msefaa"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            target="_blank"
            as="a"
            href="https://twitter.com/mssrtk"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize={10} color="subtle">
        &copy; {new Date().getFullYear()} Created By Sefa SARITEKE
      </Text>
    </Container>
  );
}

export default Footer;
