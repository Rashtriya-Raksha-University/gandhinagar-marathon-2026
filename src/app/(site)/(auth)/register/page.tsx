import { Metadata } from "next";
import SignUp from "@/app/components/auth/register";

export const metadata: Metadata = {
  title:
    "Sign Up | Studiova",
};

const SignupPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignupPage;
