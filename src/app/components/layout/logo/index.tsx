import Link from "next/link";

const Logo = ({ sticky }: { sticky: boolean }) => {
  return (
    <Link href="/" className="flex items-center">
      {/* Main logo → match Studiova dimensions (≈194x54) */}
      <img
        src={
          sticky
            ? "/images/logo/bcore_black.png"
            : "/images/logo/bcore_white.png"
        }
        alt="logo"
        className="hidden xsm:block h-28 w-auto"
      />

      {/* Small favicon logo */}
      <img
        src={sticky ? "/images/logo/GM.svg" : "/images/logo/GM.svg"}
        alt="logo"
        className="block xsm:hidden h-10 w-10"
      />
    </Link>
  );
};

export default Logo;
