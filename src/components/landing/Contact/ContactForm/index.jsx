import React from "react";
import axios from "axios";
import { Formik, Form, FastField, ErrorMessage } from "formik";
import Recaptcha from "react-google-recaptcha";
import * as Yup from "yup";
import { Button, Input } from "components/common";
import { Error, Center, InputField } from "./styles";

export default () => (
  <Formik
    initialValues={{
      company: "",
      email: "",
      description: "",
      recaptcha: "",
      success: false,
    }}
    validationSchema={Yup.object().shape({
      company: Yup.string().required("Company field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email field is required"),
      description: Yup.string().required("Description field is required"),
      recaptcha: Yup.string().required("Robots are not welcome yet!"),
    })}
    onSubmit={async (
      { company, email, description },
      { setSubmitting, resetForm, setFieldValue }
    ) => {
      try {
        await axios({
          method: "POST",
          url: `${process.env.GATSBY_SSB_FORMIK_ENDPOINT}`,
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            company,
            email,
            description,
          }),
        });
        setSubmitting(false);
        setFieldValue("success", true);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        setSubmitting(false);
        setFieldValue("success", false);
        alert("Something went wrong, please try again!"); // eslint-disable-line
      }
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form>
        <InputField>
          <Input
            as={FastField}
            type="text"
            name="company"
            component="input"
            aria-label="company"
            placeholder="Company name*"
            error={touched.company && errors.company}
          />
          <ErrorMessage component={Error} name="company" />
        </InputField>
        <InputField>
          <Input
            id="email"
            aria-label="email"
            component="input"
            as={FastField}
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>
        <InputField>
          <Input
            as={FastField}
            component="textarea"
            aria-label="description"
            id="description"
            rows="5"
            type="text"
            name="description"
            placeholder="Description*"
            error={touched.description && errors.description}
          />
          <ErrorMessage component={Error} name="description" />
        </InputField>
        {values.company && values.email && values.description && (
          <InputField>
            <FastField
              component={Recaptcha}
              sitekey={process.env.GATSBY_SSB_RECAPTCHA_KEY}
              name="recaptcha"
              onChange={value => setFieldValue("recaptcha", value)}
            />
            <ErrorMessage component={Error} name="recaptcha" />
          </InputField>
        )}
        {values.success && (
          <InputField>
            <Center>
              <h4>
                Thanks for your interest! We'll send you an email after we
                review and add your business.
              </h4>
            </Center>
          </InputField>
        )}
        <Center>
          <Button secondary type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Center>
      </Form>
    )}
  </Formik>
);
