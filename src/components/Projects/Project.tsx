import {
  VStack,
  Image,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import ProjectTech from "./ProjectTech";

interface Props {
  ImageURL: string;
  Title: string;
  Description: string;
  Technologies: string[];
  Source?: string;
  Demo?: string;
}

const Project = ({
  ImageURL,
  Title,
  Description,
  Technologies,
  Source,
  Demo,
}: Props) => {
  const cardBg = "rgba(30, 30, 30, 0.8)";
  const textColor = "#fff";
  const secondaryText = "#b0b0b0";
  const borderColor = "rgba(11, 206, 175, 0.3)";
  const accentColor = "#0BCEAF";
  const techBorderColor = "rgba(11, 206, 175, 0.5)";

  return (
    <VStack
      bg={cardBg}
      borderRadius="lg"
      height="100%"
      border="1px solid"
      borderColor={borderColor}
      overflow="hidden"
      transition="all 0.3s ease"
      boxShadow="0 4px 15px rgba(0, 0, 0, 0.3)"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 12px 30px rgba(11, 206, 175, 0.3)",
        borderColor: "rgba(11, 206, 175, 0.6)",
      }}
    >
      <Image
        width="100%"
        height="200px"
        objectFit="cover"
        src={ImageURL}
        borderBottom="1px solid"
        borderBottomColor={borderColor}
        transition="transform 0.3s ease"
        _hover={{ transform: "scale(1.05)" }}
      />
      <VStack align="left" width="100%" padding={5} height="100%" spacing={3}>
        <Text fontWeight="bold" fontSize="lg" color={textColor}>
          {Title}
        </Text>
        <Text color={secondaryText} fontSize="sm">
          {Description}
        </Text>
        <HStack wrap="wrap" spacing={2} marginY={2}>
          {Technologies.map((t) => (
            <ProjectTech
              key={t}
              label={t}
              borderColor={techBorderColor}
              textColor={textColor}
            />
          ))}
        </HStack>

        {(Source || Demo) && (
          <HStack spacing={4} marginTop="auto">
            {Source && (
              <Link
                href={Source}
                color={accentColor}
                target="_blank"
                rel="noopener noreferrer"
                fontSize="sm"
                fontWeight="bold"
                px={3}
                py={1}
                borderRadius="md"
                border="1px solid"
                borderColor={accentColor}
                transition="all 0.2s ease"
                _hover={{
                  bg: accentColor,
                  color: "#000",
                  transform: "translateY(-2px)",
                }}
              >
                Source
              </Link>
            )}
            {Demo && (
              <Link
                href={Demo}
                color={accentColor}
                target="_blank"
                rel="noopener noreferrer"
                fontSize="sm"
                fontWeight="bold"
                px={3}
                py={1}
                borderRadius="md"
                border="1px solid"
                borderColor={accentColor}
                transition="all 0.2s ease"
                _hover={{
                  bg: accentColor,
                  color: "#000",
                  transform: "translateY(-2px)",
                }}
              >
                Demo
              </Link>
            )}
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};

export default Project;
