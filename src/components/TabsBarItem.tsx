import { HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  Label: string;
  selectedTab: string;
  onSelectTab: (tab: string) => void;
  Link: string;
}

const TabsBarItem = ({ Label, selectedTab, onSelectTab, Link }: Props) => {
  const navigate = useNavigate();

  const isSelected = Label === selectedTab;

  const handleClick = () => {
    onSelectTab(Label);
    navigate(Link);
  };

  return (
    <HStack
      height="40px"
      px={{ base: 6, md: 10, lg: 20 }} // RWD padding
      mx={{ base: 0, md: 4, lg: 12 }} // RWD margin
      justifyContent="center"
      bg={isSelected ? "#1e1e1e" : "transparent"}
      borderTop="2px solid"
      borderTopColor={isSelected ? "#0BCEAF" : "transparent"}
      cursor="pointer"
      userSelect="none"
      onClick={handleClick}
      transition="all 0.2s ease"
      _hover={{
        bg: "#2d2d2d",
        borderTopColor: isSelected ? "#0BCEAF" : "#666",
      }}
      position="relative"
    >
      <Text
        fontSize="13px"
        color={isSelected ? "#fff" : "#999"}
        fontWeight={isSelected ? "500" : "400"}
        whiteSpace="nowrap"
        transition="color 0.2s ease"
        _hover={{ color: "#fff" }}
      >
        {Label}
      </Text>
    </HStack>
  );
};

export default TabsBarItem;
