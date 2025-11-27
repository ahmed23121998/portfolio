import { Image, Text, VStack, Flex, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import HomeItem from "../components/HomeItem";
import { homeData } from "../../public/data/home";

interface Props {
  setPage: (page: string) => void;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Home = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("home.js");
  }, []);

  const accentColor = "#0BCEAF";
  const textColor = "whiteAlpha.900";
  const headingColor = "whiteAlpha.900";

  const renderSection = (items: typeof homeData.contactInfo) => (
    <Box
      p={6}
      borderRadius="lg"
      bg="rgba(30, 30, 30, 0.6)"
      border="1px solid"
      borderColor="rgba(11, 206, 175, 0.3)"
      boxShadow="0 4px 20px rgba(11, 206, 175, 0.1)"
      width="100%"
      transition="all 0.3s ease"
      backdropFilter="blur(12px)"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 6px 25px rgba(11, 206, 175, 0.2)",
        borderColor: "rgba(11, 206, 175, 0.5)",
      }}
    >
      <VStack spacing={4} align="stretch">
        {items.map((item, index) => (
          <HomeItem key={index} {...item} />
        ))}
      </VStack>
    </Box>
  );

  return (
    <Flex
      minHeight="100vh"
      justify="center"
      align="center"
      direction={{ base: "column-reverse", lg: "row" }}
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 0 }}
      gap={{ base: 8, md: 16 }}
      marginBottom={6}
    >
      <VStack
        alignItems={{ base: "center", lg: "flex-start" }}
        justify="center"
        spacing={4}
        animation={`${fadeIn} 0.5s ease-out`}
        color={textColor}
      >
        <Box textAlign={{ base: "center", lg: "left" }}>
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            letterSpacing="wide"
            color={headingColor}
          >
            Ahmed Khaled
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            color={accentColor}
            mb={{ base: 6, md: 10 }}
          >
            Front-End Developer
          </Text>
        </Box>

        {renderSection(homeData.contactInfo)}
        {renderSection(homeData.education)}
        {renderSection(homeData.social)}
      </VStack>

      <Box position="relative" animation={`${fadeIn} 0.5s ease-out`}>
        <Box
          position="absolute"
          inset="0"
          borderRadius="50%"
          bg="radial-gradient(circle, rgba(11, 206, 175, 0.3) 0%, transparent 70%)"
          filter="blur(30px)"
          animation="pulse 3s ease-in-out infinite"
        />
        <Image
          src={homeData.myImage}
          width={{ base: "250px", sm: "300px", md: "400px", lg: "425px" }}
          height="auto"
          borderRadius="50%"
          border="3px solid"
          borderColor="#0BCEAF"
          boxShadow="0 0 30px rgba(11, 206, 175, 0.4)"
          transition="all 0.4s ease"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "0 0 40px rgba(11, 206, 175, 0.6)",
          }}
        />
      </Box>
    </Flex>
  );
};

export default Home;
