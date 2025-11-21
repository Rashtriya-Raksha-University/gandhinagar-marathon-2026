import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/layout-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFooterData(data?.footerData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer>
      <div className="bg-secondary py-10 md:py-20 xl:py-40">
        <div className="container">
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-0">
            {/* Left Section */}
            <div className="flex flex-col gap-10 xl:max-w-2xl w-full">
              {footerData?.tagline && (
                <h2 className="text-white xl:max-w-xl">
                  {footerData?.tagline}
                </h2>
              )}

              <div className="flex flex-col gap-2">
                {footerData?.info?.map((value: any, index: number) => (
                  <div key={index}>
                    <a href={value.href} className="flex gap-4">
                      <Image
                        src={value.icon}
                        alt="icon"
                        width={24}
                        height={24}
                      />
                      <span className="text-white hover:text-primary text-lg">
                        {value.link}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-full gap-10 md:gap-0">
              {/* Main Links */}
              <ul className="flex flex-col gap-2">
                {footerData?.links?.map((value: any, index: number) => (
                  <li key={index}>
                    <a
                      href={value.href}
                      className="text-lg text-white hover:text-primary"
                    >
                      {value.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <ul className="flex flex-col gap-2">
                {footerData?.socialLinks?.map((value: any, index: number) => (
                  <li key={index}>
                    <a
                      href={value.href}
                      className="text-lg text-white hover:text-primary"
                    >
                      {value.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Copyright Section */}
              <div className="flex md:justify-end xl:col-span-2">
                <p className="text-white/70 text-base max-w-96">
                  {footerData?.copyright}
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Line + Policy Links */}
          <div className="w-full mt-12">
            <div className="w-full h-[1px] bg-white/30 mb-6"></div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {footerData?.policyLinks?.map((value: any, index: number) => (
                <a
                  key={index}
                  href={value.href}
                  className="text-white text-base hover:text-primary transition"
                >
                  {value.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
