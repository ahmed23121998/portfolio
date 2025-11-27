import {
  VStack,
  Text,
  HStack,
  Button,
  Grid,
  GridItem,
  Box,
  Heading,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { aboutMe, technicalSkills } from "../../public/data/about";
import { keyframes } from "@emotion/react";
interface Props {
  setPage: (page: string) => void;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function extractDriveFileId(url: string): string | null {
  const match = url.match(/\/d\/(.*?)(\/|$)/);
  return match ? match[1] : null;
}

const About = ({ setPage }: Props) => {
  const [loading, setLoading] = useState(false);

  const downloadCV = () => {
    setLoading(true);
    const fileId = extractDriveFileId(aboutMe.cvDriveLink);
    if (!fileId) return;
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "cv.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setLoading(false);
  };

  useEffect(() => {
    setPage("about.html");
  }, []);

  return (
    <VStack
      alignItems="left"
      justify="center"
      minHeight="100vh" // تعديل هنا
      padding={{ base: "5", md: "10" }}
      spacing={8}
      animation={`${fadeIn} 0.5s ease-out`}
      marginBottom={6}
    >
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          color="#0BCEAF"
          mb={4}
        >
          About Me
        </Heading>
        {aboutMe.description.map((text, idx) => (
          <Text
            key={idx}
            fontSize={{ base: "lg", md: "xl" }}
            mb={idx === 0 ? 6 : 0}
            lineHeight="tall"
          >
            {text}
          </Text>
        ))}
      </Box>

      <Button
        marginTop={6}
        width="200px"
        height="50px"
        background="#0BCEAF"
        onClick={downloadCV}
        borderRadius="lg"
        fontSize="md"
        fontWeight="bold"
        boxShadow="0 4px 15px rgba(11, 206, 175, 0.3)"
        _hover={{
          background: "#09a88d",
          transform: "translateY(-2px)",
          boxShadow: "0 6px 20px rgba(11, 206, 175, 0.4)",
        }}
        _active={{ transform: "scale(0.96)", background: "#079f84" }}
        transition="all 0.2s ease"
        isLoading={loading}
        loadingText="Downloading..."
      >
        <FaDownload />
        <Text marginLeft={2}>Download CV</Text>
      </Button>

      <Box width="100%">
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mb={8}
          color="#0BCEAF"
        >
          Technical Expertise
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {Object.entries(technicalSkills).map(([category, skills], idx) => (
            <GridItem
              key={category}
              bg="rgba(30, 30, 30, 0.6)"
              borderRadius="lg"
              p={6}
              border="1px solid"
              borderColor="rgba(11, 206, 175, 0.2)"
              boxShadow="0 4px 15px rgba(0, 0, 0, 0.3)"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 6px 25px rgba(11, 206, 175, 0.3)",
                borderColor: "rgba(11, 206, 175, 0.5)",
              }}
              transition="all 0.3s ease"
              animation={`${fadeIn} 0.6s ease-out ${idx * 0.1}s backwards`}
            >
              <Text fontWeight="bold" fontSize="lg" color="#0BCEAF" mb={4}>
                {category}
              </Text>
              <VStack align="start" spacing={3}>
                {skills.map((skill) => (
                  <HStack key={skill} spacing={3} width="100%">
                    <Box w="2" h="2" borderRadius="full" bg="#0BCEAF" />
                    <Text fontSize="md">{skill}</Text>
                  </HStack>
                ))}
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
};

export default About;
