import {
  Box,
  Button,
  useToast,
  HStack,
  VStack,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { validationSchema, FormValues } from "../utils/validation";
import { sendEmail } from "../utils/sendEmail";
import ContactDetails from "../components/Contact/ContactDetails";
import ContactForm from "../components/Contact/ContactForm";

interface Props {
  setPage: (page: string) => void;
}

const Contact = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("contact.ts");
  }, []);

  const toast = useToast();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [loading, setLoading] = useState(false);

  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    setLoading(true);
    try {
      const result = await sendEmail(values);
      if (result.status === 200)
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      resetForm();
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      minHeight="100vh"
      justify="center"
      align="center"
      direction={{ base: "column-reverse", lg: "row" }}
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
      gap={{ base: 8, md: 16 }}
      marginBottom={6}
    >
      <Box
        w={{ base: "100%", md: "600px" }}
        borderRadius="lg"
        fontFamily="monospace"
        p={8}
        bg="rgba(30, 30, 30, 0.6)"
        border="1px solid"
        borderColor="rgba(11, 206, 175, 0.3)"
        boxShadow="0 4px 20px rgba(11, 206, 175, 0.15)"
        backdropFilter="blur(12px)"
        fontSize="2xl"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => {
            const errorMap: Record<number, string> = {};
            if (errors.name && touched.name) errorMap[10] = errors.name;
            if (errors.email && touched.email) errorMap[11] = errors.email;
            if (errors.subject && touched.subject)
              errorMap[12] = errors.subject;
            if (errors.message && touched.message)
              errorMap[13] = errors.message;

            return (
              <Form>
                <VStack align="center" w="full" justify="center">
                  <HStack
                    align="flex-start"
                    spacing={2}
                    w="full"
                    justify="center"
                  >
                    <VStack
                      align="stretch"
                      w="full"
                      minW={isMobile ? "300px" : "auto"}
                    >
                      <ContactDetails />
                      <ContactForm
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        // تم حذف setMessageLines
                      />
                    </VStack>
                  </HStack>

                  <Button
                    type="submit"
                    bg="#0BCEAF"
                    color="#000"
                    borderRadius="lg"
                    boxShadow="0 4px 15px rgba(11, 206, 175, 0.4)"
                    _hover={{
                      bg: "#09a88d",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(11, 206, 175, 0.5)",
                    }}
                    _active={{ transform: "scale(0.96)" }}
                    mt={6}
                    isLoading={loading}
                    loadingText="Sending..."
                    fontSize="lg"
                    height="50px"
                    px={12}
                    fontWeight="bold"
                    transition="all 0.2s ease"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Flex>
  );
};

export default Contact;
