import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
export const CreateUsersForm = () => {
  interface initialValues {
    user_name: string;
    user_email: string;
    user_age: number;
  }

  // validation schema using formik yup
  const validationSchema = Yup.object({
    user_name: Yup.string().required("Required!"),
    user_email: Yup.string()
      .email("Invalid email format!")
      .required("Required!"),
    user_age: Yup.number().required("Required!"),
  });

  const handleSubmit = (values: initialValues) => {
    // rest logic
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{ user_name: "", user_email: "", user_age: 0 }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormControl>
            <FormLabel>User Name</FormLabel>
            <Field
              style={{
                border: "1px solid #22c35e",
                borderRadius: "5px",
                padding: "4px",
                marginBottom: "5px",
                width: "100%",
                outline: "none",
              }}
              type="text"
              name="user_name"
            />
            <span style={{ color: "red" }}>
              <ErrorMessage name="user_name" />
            </span>
          </FormControl>
          <FormControl>
            <FormLabel>User Email</FormLabel>
            <Field
              style={{
                border: "1px solid #22c35e",
                borderRadius: "5px",
                padding: "5px",
                marginBottom: "5px",
                width: "100%",
                outline: "none",
              }}
              type="email"
              name="user_email"
            />

            <span style={{ color: "red" }}>
              <ErrorMessage name="user_name" />
            </span>
          </FormControl>
          <FormControl>
            <FormLabel>User Age</FormLabel>
            <Field
              style={{
                border: "1px solid #22c35e",
                borderRadius: "5px",
                padding: "5px",
                marginBottom: "5px",
                width: "100%",
                outline: "none",
              }}
              type="number"
              name="user_age"
            />

            <span style={{ color: "red" }}>
              <ErrorMessage name="user_name" />
            </span>
          </FormControl>
          <Button mt={2} colorScheme="whatsapp" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </>
  );
};
