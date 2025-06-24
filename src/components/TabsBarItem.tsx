import { HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  Label: string;
  selectedTab: string;
  onSelectTab: (tab: string) => void;
  Link: string;
}

const TabsBarItem = ({ Label, selectedTab, onSelectTab, Link }: Props) => {
  const navigate = useNavigate();

  const selectedBg = useColorModeValue("rgba(86, 156, 214, 0.3)", "gray.800");
  const borderColor = useColorModeValue("gray.600", "gray.900");
  const selectedBorderColor = useColorModeValue("syntax.keyword", "gray.400");
  const textColor = useColorModeValue("gray.300", "gray.200");
  const hoverTextColor = useColorModeValue("nightOwl.text", "white");

  const handleClick = () => {
    onSelectTab(Label);
    navigate(Link);
  };

  const isSelected = Label === selectedTab;

  return (
    <HStack
      flex={1}
      height={6}
      minWidth="0"
      justifyContent="center"
      padding={4}
      bg={isSelected ? selectedBg : "transparent"}
      borderTopColor={isSelected ? selectedBorderColor : borderColor}
      borderRightColor={borderColor}
      borderLeftColor={borderColor}
      borderTopWidth="1px"
      borderLeftWidth="1px"
      borderRightWidth="1px"
      cursor="pointer"
      userSelect="none"
      onClick={handleClick}
      transition="all 0.2s cubic-bezier(.4,1.5,.5,1.2)" // أنيميشن سلس
      _hover={{
        bg: useColorModeValue("teal.100", "teal.700"),
        color: useColorModeValue("teal.900", "white"),
        transform: "scale(1.08)", // تكبير بسيط
        boxShadow: "md", // ظل خفيف
        fontWeight: "bold",
      }}
    >
      <HStack gap={1} alignItems="center">
        <Text
          fontSize="14px"
          width="100%"
          color={textColor}
          _hover={{ color: hoverTextColor }}
          fontWeight={isSelected ? "medium" : "normal"}
          textAlign="center"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          transition="inherit"
        >
          {Label}
        </Text>
      </HStack>
    </HStack>
  );
};

export default TabsBarItem;
