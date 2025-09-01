/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Logo = ({ sticky }: { sticky: boolean }) => {
  return (
    <Link href="/" className="flex items-center">
      <img
        src={
          sticky
            ? "/images/logo/bcore_black.png"
            : "/images/logo/bcore_white.png"
        }
        alt="logo"
        className="hidden xsm:block h-18 w-auto"
      />

      <img
        src={
          sticky
            ? "/images/logo/bcore_black.png"
            : "/images/logo/bcore_white.png"
        }
        alt="logo"
        className="block xsm:hidden h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;
