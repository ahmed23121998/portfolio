import { Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import Project from "../components/Projects/Project";
import { projects } from "../../public/data/projects";
import { keyframes } from "@emotion/react";
interface Props {
  setPage: (page: string) => void;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Projects = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("projects.json");
  }, []);

  return (
    <Box
      minHeight="100vh"
      width="100vw"
      overflowY="auto"
      p={{ base: 4, md: 8 }}
      marginBottom={6}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8} minWidth="100%">
        {projects.map((project, index) => (
          <Box
            key={index}
            animation={`${fadeIn} 0.6s ease-out ${index * 0.1}s backwards`}
          >
            <Project
              ImageURL={project.ImageURL}
              Title={project.Title}
              Description={project.Description}
              Technologies={project.Technologies}
              Source={project.Source}
              Demo={project.Demo}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
