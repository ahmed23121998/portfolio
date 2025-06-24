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
  const [totalLines, setTotalLines] = useState(14);
  const [messageLines, setMessageLines] = useState(1);
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
      setMessageLines(1);
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

  useEffect(() => {
    setTotalLines(13 + messageLines);
  }, [messageLines]);

  return (
    <Flex
      width="100vw" // تعديل هنا
      justify="center"
      align="center"
      direction={{ base: "column-reverse", lg: "row" }}
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 0 }}
      gap={{ base: 8, md: 16 }}
      marginBottom={6}
      overflowY="auto" // إضافة هنا
    >
      <Box
        w={{ base: "100%", md: "600px" }}
        borderRadius="md"
        fontFamily="monospace"
        overflowX="hidden"
        pr="1rem"
        bg="transparent"
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
                        setMessageLines={setMessageLines}
                      />
                    </VStack>
                  </HStack>

                  <Button
                    type="submit"
                    bg="#0BCEAF"
                    color="white"
                    _hover={{ bg: "#09a88d" }}
                    mt={4}
                    ml={4}
                    isLoading={loading}
                    loadingText="Sending..."
                    fontSize="2xl"
                    height="60px"
                    px={10}
                    fontWeight="bold"
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
