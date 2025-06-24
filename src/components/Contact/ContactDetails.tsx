import { VStack, Text, HStack, Link } from "@chakra-ui/react";
import { contactInfo } from "../../../public/data/contact";

const ContactDetails = () => {
  const myWhatsApp = "201112985769";
  return (
    <VStack align="start" spacing={3}>
      <Text fontWeight="bold" fontSize="2xl" color="teal.300">
        Contact Information
      </Text>
      {contactInfo.map(({ icon: Icon, label, value }) => (
        <HStack key={label} spacing={2}>
          <Icon size={22} color="#0BCEAF" />
          {label === "Phone" ? (
            <Link
              href={`https://wa.me/${myWhatsApp}`}
              color="teal.200"
              isExternal
              fontSize="lg"
              fontWeight="bold"
            >
              {value}
            </Link>
          ) : value.startsWith("http") ? (
            <Link
              href={value}
              color="teal.200"
              isExternal
              fontSize="lg"
              fontWeight="bold"
            >
              {label}
            </Link>
          ) : (
            <Text color="whiteAlpha.900" fontSize="lg" fontWeight="bold">
              <b>{label}:</b> {value}
            </Text>
          )}
        </HStack>
      ))}
    </VStack>
  );
};

export default ContactDetails;
