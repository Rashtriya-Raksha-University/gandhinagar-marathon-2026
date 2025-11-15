import { Metadata as DataProtectionMetadata } from "next";
import GeneralDetail from "@/app/components/general/general-deatil";

export const metadata: DataProtectionMetadata = {
  title: "BCORE Gandhinagar Marathon | Data Protection Policy",
  description: "Data protection and privacy policy.",
};

export default function DataProtectionPolicyPage() {
  return (
    <main>
      <GeneralDetail />
    </main>
  );
}
