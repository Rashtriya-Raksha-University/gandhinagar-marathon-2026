"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MenuList = ({ item, closeMenu }: { item: any; closeMenu: any }) => {
  const { title, path, newTab } = item;
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li className="group flex items-center gap-3 transition-all duration-300 ease-in-out">
      <Link
        href={path}
        onClick={closeMenu}
        target={newTab ? "_blank" : "_self"}
        className={`
          relative text-2xl font-bold transition-colors duration-300
          ${
            isActive
              ? "text-[#0081c7] dark:text-[#4db8ff] animate-pulse"
              : "text-gray-700 dark:text-gray-300 hover:text-[#0081c7] dark:hover:text-[#4db8ff]"
          }
        `}
      >
        {title}
        {/* underline effect on hover */}
        <span
          className={`
            absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0081c7] dark:bg-[#4db8ff] transition-all duration-300
            group-hover:w-full
            ${isActive ? "w-full" : ""}
          `}
        />
      </Link>
    </li>
  );
};

export default MenuList;
