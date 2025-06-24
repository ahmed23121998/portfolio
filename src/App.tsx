import { Box, Grid } from "@chakra-ui/react";
import Home from "./pages/Home";
import TabsBar from "./components/TabsBar";
import { useState } from "react";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [selectedPage, setSelectedPage] = useState("home.js");
  return (
    <Grid
      height="100vh"
      width="100vw"
      margin="0"
      padding="0"
      boxSizing="border-box"
      overflow="hidden"
    >
      <Box width="100vw" height="100vh" overflow="hidden">
        <Box>
        <TabsBar selectedTab={selectedPage} onSelectTab={setSelectedPage}/>
        </Box>
        <Box overflowY="auto" height="calc(100% - 40px)" width="100vw">
          <Routes>
            <Route path="/" element={<Home setPage={setSelectedPage} />} />
            <Route
              path="/about"
              element={<About setPage={setSelectedPage} />}
            />
            <Route
              path="/projects"
              element={<Projects setPage={setSelectedPage} />}
            />
            <Route
              path="/contact"
              element={<Contact setPage={setSelectedPage} />}
            />
          </Routes>
        </Box>
      </Box>
    </Grid>
  );
}

export default App;
