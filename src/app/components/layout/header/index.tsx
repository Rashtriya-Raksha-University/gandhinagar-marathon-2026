"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MenuList from "./MenuList";
import Logo from "../logo";

interface MenuItem {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  submenu?: MenuItem[];
}

const Header = () => {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [sticky, setSticky] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Define pages that need different header treatment
  const lightBackgroundPages = [
    "/register",
    "/about",
    "/contact",
    "/terms-and-condition",
  ];
  const needsStaticBackground = lightBackgroundPages.includes(pathname);

  const handleScroll = () => setSticky(window.scrollY >= 80);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsClosing(true);
        setTimeout(() => {
          setMenuOpen(false);
          setIsClosing(false);
        }, 300);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const res = await fetch("/api/layout-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMenuData(data?.MenuData || []);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchMenuData();
  }, []);

  // Determine if header should have background
  const shouldHaveBackground = sticky || needsStaticBackground;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-primary before:transition-all before:duration-500 before:ease-in-out ${
        shouldHaveBackground ? "before:h-full" : "before:h-0"
      }`}
    >
      <div className="container">
        <nav className={`relative flex items-center justify-between py-5`}>
          <div className="flex items-center">
            <Logo sticky={shouldHaveBackground} />
          </div>

          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-8">
              {menuData.map((menuItem) => (
                <MenuList
                  key={menuItem.id}
                  item={menuItem}
                  closeMenu={() => {}}
                  isHorizontal={true}
                  sticky={shouldHaveBackground}
                />
              ))}
            </ul>
          </div>

          <div className="flex md:hidden items-center">
            <div className="relative flex items-center justify-end w-full">
              <button
                onClick={() => setMenuOpen(true)}
                className="relative z-20 p-1"
              >
                <Image
                  src={
                    shouldHaveBackground
                      ? "/images/Icon/menu-button-sticky.svg"
                      : "/images/Icon/menu-button.svg"
                  }
                  alt="menu icon"
                  width={45}
                  height={45}
                  className="cursor-pointer"
                />
              </button>

              {menuOpen && (
                <div
                  ref={menuRef}
                  className={`absolute top-full right-0 sm:right-4 mt-2 flex flex-col gap-5 min-w-[20rem] max-w-[90vw] bg-white dark:bg-black p-6 rounded-3xl shadow-lg transition-all duration-300 ease-in-out z-30 ${
                    isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  }`}
                >
                  <div className="flex items-center justify-between pb-5 border-b border-secondary/15 dark:border-white/15">
                    <p className="text-secondary dark:text-white">Menu</p>
                    <div
                      onClick={() => setMenuOpen(false)}
                      className="p-2 cursor-pointer"
                    >
                      <Image
                        src="/images/Icon/close-icon.svg"
                        alt="close"
                        width={16}
                        height={16}
                        className="dark:hidden"
                      />
                      <Image
                        src="/images/Icon/close-icon-dark.svg"
                        alt="close"
                        width={16}
                        height={16}
                        className="hidden dark:block"
                      />
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 pb-4">
                    {menuData.map((menuItem) => (
                      <MenuList
                        key={menuItem.id}
                        item={menuItem}
                        closeMenu={() => setMenuOpen(false)}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
