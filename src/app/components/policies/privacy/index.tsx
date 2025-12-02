"use client";

import Link from "next/link";

const DataProtectionPolicyPage = () => {
  const personalInfoTypes: string[] = [
    "Name",
    "Contact details including email address, address and telephone number",
    "Date of birth",
    "Blood group",
    "Demographic information such as postcode",
    "Preferences and opinions",
    "Any other information requested on this Site or otherwise requested by us or provided by you",
  ];

  const usePurposes: string[] = [
    "To contact and communicate with you",
    "For internal record keeping",
    "For market research and business development including website development",
    "Marketing",
    "To run competitions or offer additional benefits to you",
    "To send you promotional information about third parties that we think may be of interest to you",
  ];

  const disclosureReasons: string[] = [
    "For the purpose of providing information, products, services or marketing to customers",
    "To credit reporting agencies and courts, tribunals, regulatory authorities where customers fail to pay for goods or services",
    "To courts, tribunals, regulatory authorities, and law enforcement officers as required by law",
    "To third parties, including agents or sub-contractors, who assist us in providing information, products, services or marketing to you",
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-blue-200 dark:bg-secondary">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              DATA PROTECTION POLICY
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Purpose of Personal Data Processing
            </h2>
            <p className="text-gray-700 dark:text-white/80 mb-4">
              This Privacy Policy sets out our commitment to protecting the
              privacy of your personal information that we collect through
              bcorenightrun.com (Site) or directly from you.
            </p>
            <p className="text-gray-700 dark:text-white/80 mb-4">
              Please read this Privacy Policy carefully. Please contact us at{" "}
              <a
                href="mailto:bcorenightrun@rru.ac.in"
                className="text-primary dark:text-primary font-semibold hover:underline"
              >
                bcorenightrun@rru.ac.in
              </a>{" "}
              if you have any questions.
            </p>
            <p className="text-gray-700 dark:text-white/80 font-semibold">
              You providing us with personal information indicates that you have
              had sufficient opportunity to access this Privacy Policy and that
              you have read and accepted it.
            </p>
          </div>

          {/* Collection of Personal Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              1. Collection of Personal Information
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Personal Information We Collect:
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 mb-6">
                {personalInfoTypes.map((type: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-white/80">
                      {type}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 mt-8">
                Your Use of Our Site:
              </h3>
              <p className="text-gray-700 dark:text-white/80 mb-4">
                As with most online businesses, we may log information about
                your access and use of our Site, including through the use of
                Internet cookies, your communications with our Site, the type of
                browser you are using, the type of operating system you are
                using and the domain name of your Internet service provider.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 mt-8">
                Your Opinion and Feedback:
              </h3>
              <p className="text-gray-700 dark:text-white/80">
                We may contact you to voluntarily respond to questionnaires,
                surveys or market research to seek your opinion and feedback.
                Providing this information is optional to you.
              </p>
            </div>
          </div>

          {/* Collection and Use */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              2. Collection and Use of Personal Information
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-white/80 mb-4">
                We collect and use the information for purposes including:
              </p>
              <ul className="flex flex-col gap-3">
                {usePurposes.map((purpose: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-white/80">
                      {purpose}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disclosure */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              3. Disclosure of Personal Information
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-white/80 mb-4">
                We may disclose personal information:
              </p>
              <ul className="flex flex-col gap-3 mb-6">
                {disclosureReasons.map((reason: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-white/80">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-white/80 text-sm">
                  When we disclose your personal information to third parties
                  for these purposes, we will request that the third party
                  follow this Privacy Policy regarding handling of your personal
                  information.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              4. Your Rights and Controlling Your Personal Information
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Choice and Consent
                </h3>
                <p className="text-gray-700 dark:text-white/80">
                  Providing us with your personal information is optional. You
                  can choose not to provide personal information. When you
                  provide us with your personal information, you consent to the
                  terms in this Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Restrict
                </h3>
                <p className="text-gray-700 dark:text-white/80">
                  You may choose to restrict the collection or use of your
                  personal information. If you have previously agreed to us
                  using your personal information for marketing purposes, you
                  may change your mind at any time by contacting us.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Access
                </h3>
                <p className="text-gray-700 dark:text-white/80">
                  You may request details of personal information that we hold
                  about you, in certain circumstances set out in the Digital
                  Personal Data Protection Act (DPDPA), 2023. An administrative
                  fee may be payable for the provision of information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Correction
                </h3>
                <p className="text-gray-700 dark:text-white/80">
                  If you believe that any information we hold on you is
                  inaccurate, out of date, incomplete, irrelevant or misleading,
                  please contact us by email. We will respond to any request
                  within a reasonable time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Complaints
                </h3>
                <p className="text-gray-700 dark:text-white/80">
                  If you believe that we have breached the Indian Privacy
                  Principles and wish to make a complaint, please contact us by
                  email setting out details of the breach.
                </p>
              </div>
            </div>
          </div>

          {/* Storage and Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              5. Storage and Security
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-white/80 mb-4">
                We are committed to ensuring that the information you provide is
                secure. In order to prevent unauthorized access or disclosure,
                we have put in place suitable physical, electronic and
                managerial procedures to safeguard and secure the information.
              </p>
              <div className="bg-white dark:bg-lightgray/10 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-white/80 text-sm">
                  <strong>Important:</strong> No information transmitted over
                  the Internet can be guaranteed to be secure. We cannot
                  guarantee the security of any information that you transmit to
                  us, or receive from us. The transmission and exchange of
                  information is carried out at your own risk.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies & Web Beacons */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              6. Cookies & Web Beacons
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Cookies
                </h3>
                <p className="text-gray-700 dark:text-white/80">
                  We may use cookies on this site from time to time. Cookies are
                  text files placed in your computer's browser to store your
                  preferences. Once you choose to furnish the Site with
                  personally identifiable information, this information may be
                  linked to the data stored in the cookie.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Web Beacons
                </h3>
                <p className="text-gray-700 dark:text-white/80">
                  We may use web beacons on this site from time to time. Web
                  beacons are small pieces of code placed on a web page to
                  monitor behavior and collect data about visitors viewing a web
                  page.
                </p>
              </div>
            </div>
          </div>

          {/* Amendments */}
          <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-lg mb-12 border-l-4 border-amber-500">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              8. Amendments
            </h2>
            <p className="text-gray-700 dark:text-white/80">
              This Privacy Policy may be amended from time to time in our sole
              discretion. Your continued use of our Site following any
              amendments indicates that you accept the amendments. You should
              check this Privacy Policy regularly to ensure you are aware of any
              changes.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg text-center">
            <p className="text-gray-700 dark:text-white/90">
              For privacy-related queries, contact us at{" "}
              <a
                href="mailto:bcorenightrun@rru.ac.in"
                className="text-primary dark:text-primary font-semibold hover:underline"
              >
                bcorenightrun@rru.ac.in
              </a>
            </p>
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white font-semibold rounded-full transition-all duration-300 hover:bg-secondary/90 hover:scale-105"
            >
              <span>←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataProtectionPolicyPage;
