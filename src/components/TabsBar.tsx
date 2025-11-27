import { HStack, useColorModeValue } from "@chakra-ui/react";
import TabsBarItem from "./TabsBarItem";

interface Props {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

const TabsBar = ({ selectedTab, onSelectTab }: Props) => {
  const backgroundColor = useColorModeValue("#1e1e1e", "#1e1e1e");
  const tabs = [
    { Label: "Home", Link: "/" },
    { Label: "About Me", Link: "/about" },
    { Label: "Projects", Link: "/projects" },
    { Label: "Contact Me", Link: "/contact" },
  ];
  return (
    <HStack
      bg={backgroundColor}
      width="100%"
      py={0}
      spacing={0}
      justify="flex-start"
      borderBottom="1px solid"
      borderColor="#2d2d2d"
      position="sticky"
      top={0}
      zIndex={100}
    >
      {tabs.map((tab) => (
        <TabsBarItem
          key={tab.Label}
          selectedTab={selectedTab}
          onSelectTab={onSelectTab}
          Label={tab.Label}
          Link={tab.Link}
        />
      ))}
    </HStack>
  );
};

export default TabsBar;
