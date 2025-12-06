import {
  VStack,
  Text,
  HStack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { contactInfo } from "../../../public/data/contact";

const ContactDetails = () => {
  const myWhatsApp = "201112985769";

  // استخدم breakpoints للتحكم بحجم النصوص والأيقونات
  const iconSize = useBreakpointValue({ base: 18, md: 22 });
  const fontSize = useBreakpointValue({ base: "md", md: "lg" });
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const spacing = useBreakpointValue({ base: 2, md: 3 });

  return (
    <VStack align="start" spacing={spacing} w="100%">
      <Text fontWeight="bold" fontSize={headingSize} color="teal.300">
        Contact Information
      </Text>
      {contactInfo.map(({ icon: Icon, label, value }) => (
        <HStack
          key={label}
          spacing={2}
          align="start"
          flexWrap={{ base: "wrap", md: "nowrap" }}
          w="100%"
        >
          <Icon size={iconSize} color="#0BCEAF" />
          {label === "Phone" ? (
            <Link
              href={`https://wa.me/${myWhatsApp}`}
              color="teal.200"
              isExternal
              fontSize={fontSize}
              fontWeight="bold"
              wordBreak="break-word"
            >
              {value}
            </Link>
          ) : value.startsWith("http") ? (
            <Link
              href={value}
              color="teal.200"
              isExternal
              fontSize={fontSize}
              fontWeight="bold"
              wordBreak="break-word"
            >
              {label}
            </Link>
          ) : (
            <Text
              color="whiteAlpha.900"
              fontSize={fontSize}
              fontWeight="bold"
              wordBreak="break-word"
            >
              <b>{label}:</b> {value}
            </Text>
          )}
        </HStack>
      ))}
    </VStack>
  );
};

export default ContactDetails;
