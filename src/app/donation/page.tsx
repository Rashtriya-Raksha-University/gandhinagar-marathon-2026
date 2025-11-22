"use client";

import { useState } from "react";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

const DonationPage = () => {
  const PAYMENT_LINK = "https://forms.eduqfix.com/rashraksh/add";

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
    if (formData.name && formData.email && formData.phone && formData.amount) {
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
          height={700}
          width={1800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>

        <div className="relative z-10 container text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Support Our Cause
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mt-4">
            Every contribution helps create a{" "}
            <span className="text-primary">
              healthier, more active community
            </span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-40 dark:bg-secondary">
        <div className="container flex flex-col xl:flex-row gap-15 xl:gap-48">
          {/* Left Side */}
          <div className="max-w-md flex flex-col gap-9 md:gap-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              Make a Difference
            </h2>

            <p className="text-secondary/70 dark:text-white/70">
              Your generous donation helps support athletes, para-athletes,
              fitness campaigns, and better community infrastructure.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                "Support training programs for young athletes",
                "Fund fitness awareness campaigns",
                "Enable participation for para-athletes",
                "Improve running facilities and infrastructure",
              ].map((value, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="bg-primary p-1.5 rounded-full">
                    <Image
                      src="/images/Icon/right-check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="w-full">
            {!showQR ? (
              <div className="flex flex-col gap-6">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="w-full border-b py-3.5 outline-none"
                />

                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="w-full border-b py-3.5 outline-none"
                />

                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className="w-full border-b py-3.5 outline-none"
                />

                <div className="relative">
                  <span className="absolute left-0 top-3.5 text-gray-500 font-semibold">
                    ₹
                  </span>
                  <input
                    required
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Donation Amount *"
                    min="1"
                    className="w-full pl-6 border-b py-3.5 outline-none"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message (Optional)"
                  rows={4}
                  className="w-full border-b py-3.5 outline-none"
                />

                <button
                  type="button"
                  onClick={handleProceedToPayment}
                  disabled={
                    !formData.name ||
                    !formData.email ||
                    !formData.phone ||
                    !formData.amount
                  }
                  className="w-full bg-primary text-secondary font-bold py-4 rounded-full hover:bg-secondary hover:text-white transition disabled:opacity-50"
                >
                  Proceed to Payment
                </button>
              </div>
            ) : (
              <>
                {/* Payment Summary */}
                <div className="bg-primary/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    Payment Summary
                  </h3>

                  <div className="flex justify-between mb-2">
                    <span>Name:</span>
                    <span className="font-semibold">{formData.name}</span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Phone:</span>
                    <span className="font-semibold">{formData.phone}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span className="font-semibold text-primary text-2xl">
                      ₹{formData.amount}
                    </span>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center gap-6 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Scan QR Code to Pay
                  </h3>

                  <div className="bg-white p-4 rounded-lg shadow">
                    <QRCodeCanvas
                      value={PAYMENT_LINK}
                      size={220}
                      includeMargin
                    />
                  </div>

                  <a
                    href={PAYMENT_LINK}
                    target="_blank"
                    className="w-full bg-primary text-secondary font-semibold py-3 rounded-full text-center hover:bg-secondary hover:text-white transition"
                  >
                    Pay via Eduqfix Link
                  </a>
                </div>

                {/* Confirmation */}
                <div className="flex flex-col gap-5 border-t pt-8 mt-8">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                    After completing payment, please confirm:
                  </h4>

                  {!submitted ? (
                    !loader ? (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-primary text-secondary font-bold py-4 rounded-full hover:bg-secondary hover:text-white transition"
                      >
                        Confirm Payment
                      </button>
                    ) : (
                      <button className="w-full py-3 flex justify-center items-center gap-2 rounded bg-gray-300">
                        <div className="animate-spin size-6 border-2 border-t-transparent border-primary rounded-full" />
                        Confirming...
                      </button>
                    )
                  ) : (
                    <p className="text-green-600 font-semibold">
                      Thank you! Your confirmation has been received.
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowQR(false)}
                    className="text-gray-600 underline text-center mt-4"
                  >
                    ← Back to form
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonationPage;
