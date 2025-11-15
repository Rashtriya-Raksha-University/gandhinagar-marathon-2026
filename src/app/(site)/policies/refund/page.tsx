import { Metadata as RefundMetadata } from "next";
import GeneralDetail from "@/app/components/general/general-deatil";

export const metadata: RefundMetadata = {
  title: "BCORE Gandhinagar Marathon | Refund Policy",
  description: "Refund policy for registrations.",
};

export default function RefundPolicyPage() {
  return (
    <main>
      <GeneralDetail />
    </main>
  );
}
