import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  chakra,
  useToken,
} from "@chakra-ui/react";

interface TimelineItemProps {
  month: string;
  content: string;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  month,
  content,
  isLeft,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Flex w="100%">
      {isDesktop && isLeft && (
        <>
          <EmptyCard />
          <LineWithDot />
          <Card month={month} content={content} isLeft={isLeft} />
        </>
      )}
      {isDesktop && !isLeft && (
        <>
          <Card month={month} content={content} isLeft={isLeft} />
          <LineWithDot />
          <EmptyCard />
        </>
      )}
      {isMobile && (
        <>
          <LineWithDot />
          <Card month={month} content={content} isLeft={false} />
        </>
      )}
    </Flex>
  );
};

interface CardProps extends TimelineItemProps {}

const Card = (props: CardProps) => {
  let borderWidthValue = props.isLeft ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = props.isLeft ? "-15px" : "unset";
  let rightValue = props.isLeft ? "unset" : "-15px";

  const balloonLightColorCode = useToken("colors", "orange.100");
  const balloonDarkColorCode = useToken("colors", "purple.900");

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      mb={5}
      bg={useColorModeValue("orange.100", "purple.900")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      boxShadow={{ base: "none", md: "lg" }}
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          balloonLightColorCode,
          balloonDarkColorCode,
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="2xl" fontWeight="bold" color={props.isLeft ? "teal.400" : "blue.400"}>
          {props.month !== "0" && props.month + "月"}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <Text fontSize="xl">{props.content}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
      mb={5}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 20px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.600")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("orange.400", "purple.400")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default TimelineItem;
