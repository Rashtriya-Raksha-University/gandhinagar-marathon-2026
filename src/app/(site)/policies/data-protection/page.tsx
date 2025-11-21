import { Metadata } from "next";
import DataProtectionPolicyPage from "@/app/components/policies/privacy";

export const metadata: Metadata = {
  title: "BCORE Night Run 2026 | Data Protection Policy",
  description:
    "Data protection and privacy policy for BCORE Night Run 2026. Learn how we collect, use, store, and protect your personal information in compliance with DPDPA 2023.",
  keywords: [
    "privacy policy",
    "data protection",
    "DPDPA",
    "personal information",
    "BCORE Night Run",
    "data security",
    "cookies",
    "GDPR",
  ],
};

export default function Page() {
  return (
    <main>
      <DataProtectionPolicyPage />
    </main>
  );
}
