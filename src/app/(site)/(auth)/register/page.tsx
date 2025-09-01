import { Metadata } from "next";
import Register from "@/app/components/auth/register";

export const metadata: Metadata = {
  title: "Register",
};

const SignupPage = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default SignupPage;
