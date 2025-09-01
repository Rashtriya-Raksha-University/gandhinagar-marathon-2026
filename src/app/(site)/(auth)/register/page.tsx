import { Metadata } from "next";
import SignUp from "@/app/components/auth/register";
import Header from "@/app/components/layout/header";
export const metadata: Metadata = {
  title: "Sign Up | Studiova",
};

const SignupPage = () => {
  return (
    <>
      <Header />
      <SignUp />
    </>
  );
};

export default SignupPage;
