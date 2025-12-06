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
      width={{ base: "25%", sm: "25%", md: "25%", lg: "25%" }} 
      height="40px"
      px="2%"
      mx="1%"
      justifyContent="center"
      bg={isSelected ? "gray.800" : "transparent"}
      borderTop="2px solid"
      borderTopColor={isSelected ? "teal.300" : "transparent"}
      cursor="pointer"
      userSelect="none"
      onClick={handleClick}
      transition="all 0.25s ease"
      _hover={{
        bg: isSelected ? "gray.800" : "gray.700",
        borderTopColor: isSelected ? "teal.300" : "gray.500",
      }}
    >
      <Text
        fontSize="13px"
        color={isSelected ? "#0BCEAF" : "#999"}
        fontWeight={isSelected ? "600" : "400"}
        whiteSpace="nowrap"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        letterSpacing={isSelected ? "0.5px" : "0.2px"}
      >
        {Label}
      </Text>
    </HStack>
  );
};

export default TabsBarItem;
