"use client";
import ErrorMessage from "@/components/common/ErrorMessage";
import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import { object, string } from "yup";

export default function SentMe() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: ({ name, email, message }) => {
      console.log({ name, email, message });
    },
    validationSchema: object({
      name: string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      email: string()
        .required("Email is required")
        .email("Invalid email format"),
      message: string()
        .required("Message is required")
        .min(5, "Message must be at least 5 characters"),
    }),
  });
  return (
    <section id="sent-me" className="py-10">
      <div className="md:col-span-2">
        <Title title="Sent Me" />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full p-5 mx-auto rounded-xl grid grid-cols-1 md:grid-cols-2 gap-2 bg-primary-foreground"
      >
        <div className="grid items-center gap-3">
          <Label htmlFor="name">Name :</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            placeholder="Type your name here."
            id="name"
            name="name"
            type="text"
          />
          <ErrorMessage
            message={
              formik.errors.name && (formik.touched.name || formik.values.name)
                ? formik.errors.name
                : ""
            }
          />
        </div>
        <div className="grid items-center gap-3">
          <Label htmlFor="email">Email :</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="Type your email here."
            id="email"
            name="email"
            type="email"
          />
          <ErrorMessage
            message={
              formik.errors.email &&
              (formik.touched.email || formik.values.email)
                ? formik.errors.email
                : ""
            }
          />
        </div>
        <div className="grid items-center gap-3 md:col-span-2">
          <Label htmlFor="message">Message :</Label>
          <Textarea
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
            id="message"
            name="message"
            placeholder="Type your message here."
            className="h-40"
          />
          <ErrorMessage
            message={
              formik.errors.message &&
              (formik.touched.message || formik.values.message)
                ? formik.errors.message
                : ""
            }
          />
        </div>
        <div>
          <Button
            disabled={formik.isSubmitting}
            variant="outline"
            type="submit"
          >
            Send message
          </Button>
        </div>
      </form>
    </section>
  );
}
