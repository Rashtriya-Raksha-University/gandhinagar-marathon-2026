import { Metadata } from "next";
import RefundPolicyPage from "@/app/components/policies/refund-policy";

export const metadata: Metadata = {
  title: "BCORE Night Run 2026 | Entry Rejection & Refund Policy",
  description:
    "Entry rejection and refund policy for BCORE Night Run 2026. Important information about no-refund scenarios, category changes, processing charges, and appeal procedures.",
  keywords: [
    "refund policy",
    "no refund",
    "registration",
    "cancellation",
    "BCORE Night Run",
    "entry rejection",
    "processing charges",
  ],
};

export default function Page() {
  return (
    <main>
      <RefundPolicyPage />
    </main>
  );
}
