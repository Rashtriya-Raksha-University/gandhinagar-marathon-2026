"use client";

import { useState } from "react";
import Image from "next/image";

const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceedToPayment = () => {
    if (formData.name && formData.email && formData.amount) {
      setShowQR(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);

    try {
      const res = await fetch("/api/donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          amount: "",
          message: "",
        });
        setShowQR(false);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-white bg-black h-[60vh] min-h-[400px]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Donation"
          src={"/images/crousal/img5.jpg"}
          height={694}
          width={1800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>

        <div className="relative z-10 container text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src={"/images/Icon/primary-leaf.svg"}
                alt="icon"
                width={64}
                height={64}
                className="animate-spin"
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Support Our Cause
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
              Every contribution helps us create a{" "}
              <span className="text-primary">
                healthier, more active community
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-40 dark:bg-secondary">
        <div className="container">
          <div className="flex flex-col xl:flex-row gap-15 xl:gap-48">
            {/* Left Side - Impact Information */}
            <div className="max-w-md flex flex-col gap-9 md:gap-16">
              <div className="flex flex-col gap-5 md:gap-8">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                  Make a Difference
                </h2>
                <p className="text-secondary/70 dark:text-white/70">
                  Your generous donation to the BCORE Gandhinagar Night Marathon
                  helps us promote health, fitness, and community spirit across
                  India.
                </p>
                <div>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Support training programs for young athletes",
                      "Fund fitness awareness campaigns",
                      "Enable participation for para-athletes",
                      "Improve running facilities and infrastructure",
                    ].map((value, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-1.5 sm:gap-4"
                      >
                        <div className="bg-primary w-fit p-1 sm:p-1.5 rounded-full flex-shrink-0">
                          <Image
                            src={"/images/Icon/right-check.svg"}
                            alt="right-icon"
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="flex-1">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Our Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "10,000+", label: "Participants" },
                    { number: "₹50L+", label: "Funds Raised" },
                    { number: "25+", label: "Programs" },
                    { number: "500+", label: "Athletes Trained" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-white/70">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Donation Form */}
            <div className="w-full">
              {!showQR ? (
                <div className="flex flex-col gap-5 md:gap-8">
                  <div>
                    <input
                      required
                      className="w-full border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="w-full border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number (Optional)"
                    />
                  </div>
                  <div>
                    <div className="relative">
                      <span className="absolute left-0 top-3.5 text-gray-500 dark:text-white/70 font-semibold">
                        ₹
                      </span>
                      <input
                        required
                        className="w-full pl-6 border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Donation Amount *"
                        min="1"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      className="w-full border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message (Optional)"
                      rows={4}
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleProceedToPayment}
                      disabled={
                        !formData.name || !formData.email || !formData.amount
                      }
                      className="group relative flex justify-center items-center w-full bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="py-4 px-2 text-lg font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">
                        Proceed to Payment
                      </span>
                      <div className="absolute top-0.5 right-0.5 transition-all duration-300 ease-in-out group-hover:left-0">
                        <svg
                          className="flex items-center transition-transform duration-300 ease-in-out group-hover:rotate-45"
                          width="58"
                          height="58"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_1_873)">
                            <rect
                              x="3"
                              y="2"
                              width="52"
                              height="52"
                              rx="26"
                              fill="white"
                            />
                            <path
                              d="M24 23H34M34 23V33M34 23L24 33"
                              stroke="#1F2A2E"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_1_873"
                              x="0"
                              y="0"
                              width="58"
                              height="58"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="1" />
                              <feGaussianBlur stdDeviation="1.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1_873"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1_873"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {/* Payment Summary */}
                  <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                      Payment Summary
                    </h3>
                    <div className="flex flex-col gap-2 text-gray-700 dark:text-white/80">
                      <div className="flex justify-between">
                        <span>Name:</span>
                        <span className="font-semibold">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-semibold text-primary text-2xl">
                          ₹{formData.amount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* QR Code Section */}
                  <div className="flex flex-col items-center gap-6 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      Scan QR Code to Pay
                    </h3>

                    {/* Placeholder QR Code */}
                    <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg">
                      <Image
                        src="/images/qr-placeholder.png"
                        alt="QR Code"
                        width={256}
                        height={256}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <p className="text-center text-sm text-gray-600 dark:text-white/70">
                      Scan using any UPI app (GPay, PhonePe, Paytm, etc.)
                    </p>
                  </div>

                  {/* After Payment Form */}
                  <div className="flex flex-col gap-5 border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                      After completing payment, please confirm:
                    </h4>

                    {submitted && (
                      <div className="flex gap-1.5 mb-4">
                        <div className="bg-primary w-fit p-1 sm:p-1.5 rounded-full flex-shrink-0">
                          <Image
                            src={"/images/Icon/right-check.svg"}
                            alt="right-icon"
                            width={20}
                            height={20}
                          />
                        </div>
                        <p className="text-secondary">
                          Thank you for your generous donation! We have received
                          your confirmation and will send you a receipt via
                          email shortly.
                        </p>
                      </div>
                    )}

                    <div>
                      {!loader ? (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="group relative flex justify-center items-center w-full bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        >
                          <span className="py-4 px-2 text-lg font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">
                            Confirm Payment
                          </span>
                          <div className="absolute top-0.5 right-0.5 transition-all duration-300 ease-in-out group-hover:left-0">
                            <svg
                              className="flex items-center transition-transform duration-300 ease-in-out group-hover:rotate-45"
                              width="58"
                              height="58"
                              viewBox="0 0 58 58"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_1_873)">
                                <rect
                                  x="3"
                                  y="2"
                                  width="52"
                                  height="52"
                                  rx="26"
                                  fill="white"
                                />
                                <path
                                  d="M24 23H34M34 23V33M34 23L24 33"
                                  stroke="#1F2A2E"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_1_873"
                                  x="0"
                                  y="0"
                                  width="58"
                                  height="58"
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  />
                                  <feOffset dy="1" />
                                  <feGaussianBlur stdDeviation="1.5" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_1_873"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_873"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </button>
                      ) : (
                        <button className="bg-grey item-center flex gap-2 py-3 px-7 rounded w-full justify-center">
                          <div
                            className="animate-spin inline-block size-6 border-2 border-current border-t-transparent text-primary rounded-full dark:text-primary"
                            role="status"
                            aria-label="loading"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                          Confirming...
                        </button>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowQR(false)}
                      className="text-gray-600 dark:text-white/70 underline text-center"
                    >
                      ← Back to form
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonationPage;
