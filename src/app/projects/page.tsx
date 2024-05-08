"use client";

import { XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import "../globals.css";

const RegistrationForm = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit(values, formikHelpers) {
      formikHelpers.resetForm();
      formikHelpers.setSubmitting(false);
      router.push("/success");
    },
    validateOnMount: true,
    validate(values) {
      let errors: { name?: string; email?: string } = {};

      if (!values.name) {
        errors.name = "name is required";
      }
      if (values.name.length < 3) {
        errors.name = "Name should be atleast 3 characters long";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9. _%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid Email";
      }

      return errors;
    },
  });

  // when user clicks should redirect to home page
  const closeHandler = () => {
    router.push("/");
  };

  return (
    <section className=" w-full h-[550px] flex flex-col justify-center items-center">
      <div className="mb-12 flex flex-row justify-center px-5 text-3xl text-center max-w-[515px] mx-auto">
        {/* this is registration form  */}
        <div>
          <div className="mt-8 w-74 flex flex-col">
            <h1 className="text-2xl text-green-600 special-text">
              Registration Form
            </h1>
            <p className="text-4xl font-bold">
              Start your success journey here!
            </p>
          </div>
          <form className="mt-8" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter your name"
              aria-label="Enter your name"
              className="mt-4 py-4 px-4 w-10/12 rounded-3xl bg-slate-200 text-center text-xl"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-600 text-sm"> {formik.errors.name} </div>
            )}
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
              aria-label="Enter your email"
              className="mt-4 py-4 px-4 w-10/12 rounded-3xl bg-slate-200 text-center text-xl"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600 text-sm">
                {" "}
                {formik.errors.email}{" "}
              </div>
            )}
            <button
              type="submit"
              disabled={!formik.isValid}
              className={`mt-8 w-10/12 px-16 py-3 bg-black text-white rounded-full cursor-pointer${
                !formik.isValid
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                  : ""
              }
  `}
            >
              <div className="flex flex-row justify-center items-center">
                Submit
                <ArrowRightIcon className="ml-4 size-6 text-white" />
              </div>
            </button>
          </form>
        </div>

        <div>
          <XMarkIcon
            className="size-14 text-black mt-4 cursor-pointer"
            onClick={closeHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
