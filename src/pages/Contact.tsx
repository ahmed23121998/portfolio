import {
  Box,
  Button,
  useToast,
  VStack,
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
      direction={{ base: "column", lg: "row" }}
      px={{ base: 3, sm: 4, md: 6, lg: 8 }}
      py={{ base: 6, sm: 8, md: 10, lg: 12 }}
      gap={{ base: 6, sm: 8, md: 10, lg: 16 }}
      marginBottom={{ base: 4, md: 6 }}
    >
      <Box
        w={{ base: "100%", sm: "90%", md: "90%", lg: "50%" }}
        maxW="100%"
        borderRadius={{ base: "md", md: "lg" }}
        fontFamily="monospace"
        p={{ base: 4, sm: 5, md: 8 }}
        bg="rgba(30, 30, 30, 0.6)"
        border="1px solid"
        borderColor="rgba(11, 206, 175, 0.3)"
        boxShadow={{
          base: "0 2px 10px rgba(11, 206, 175, 0.1)",
          md: "0 4px 20px rgba(11, 206, 175, 0.15)",
        }}
        backdropFilter="blur(12px)"
        fontSize={{ base: "sm", sm: "base", md: "lg", lg: "2xl" }}
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
                <VStack
                  align="center"
                  w="full"
                  justify="center"
                  spacing={{ base: 3, md: 4 }}
                >
                  <VStack align="stretch" w="full">
                    <ContactDetails />
                    <ContactForm
                      values={values}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                  </VStack>

                  <Button
                    type="submit"
                    bg="#0BCEAF"
                    color="#000"
                    borderRadius={{ base: "md", md: "lg" }}
                    boxShadow={{
                      base: "0 2px 10px rgba(11, 206, 175, 0.3)",
                      md: "0 4px 15px rgba(11, 206, 175, 0.4)",
                    }}
                    _hover={{
                      bg: "#09a88d",
                      transform: "translateY(-2px)",
                      boxShadow: {
                        base: "0 3px 12px rgba(11, 206, 175, 0.4)",
                        md: "0 6px 20px rgba(11, 206, 175, 0.5)",
                      },
                    }}
                    _active={{ transform: "scale(0.98)" }}
                    mt={{ base: 4, md: 6 }}
                    mb={{ base: 2, md: 0 }}
                    isLoading={loading}
                    loadingText="Sending..."
                    fontSize={{ base: "sm", md: "lg" }}
                    height={{ base: "40px", md: "50px" }}
                    px={{ base: 6, md: 12 }}
                    fontWeight="bold"
                    transition="all 0.2s ease"
                    width={{ base: "100%", sm: "auto" }}
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
