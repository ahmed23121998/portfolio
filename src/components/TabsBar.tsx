import { HStack, useColorModeValue } from "@chakra-ui/react";
import TabsBarItem from "./TabsBarItem";

interface Props {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

const TabsBar = ({ selectedTab, onSelectTab }: Props) => {
  const backgroundColor = useColorModeValue("gray-100", "gray.900");
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
      py={4}
      spacing={0}
      justify="space-between" 
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
