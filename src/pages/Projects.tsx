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
    <Box minHeight="100vh" width="100vw" overflowY="auto" p={4} marginBottom={6}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={6}
        minWidth="100%"
        animation={`${fadeIn} 0.5s ease-out`}
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            ImageURL={project.ImageURL}
            Title={project.Title}
            Description={project.Description}
            Technologies={project.Technologies}
            Source={project.Source}
            Demo={project.Demo}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
