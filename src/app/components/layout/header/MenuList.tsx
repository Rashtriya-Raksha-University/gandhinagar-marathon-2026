"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  submenu?: MenuItem[];
}

const MenuList = ({
  item,
  closeMenu,
}: {
  item: MenuItem;
  closeMenu: () => void;
}) => {
  const { title, path, newTab, submenu } = item;
  const pathname = usePathname();
  const isActive = path ? pathname === path : false;
  const [open, setOpen] = useState(false);

  return (
    <li className="relative group">
      {/* Main Item */}
      {submenu ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-2 text-2xl font-bold transition-colors duration-300 
              ${
                isActive
                  ? "text-[#0081c7] dark:text-[#4db8ff]"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#0081c7] dark:hover:text-[#4db8ff]"
              }`}
          >
            {title}
            <span className="text-sm">{open ? "▲" : "▼"}</span>
          </button>

          {/* Dropdown */}
          {open && (
            <ul className="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 space-y-2 z-50">
              {submenu.map((sub) => (
                <li key={sub.id}>
                  <Link
                    href={sub.path ?? "#"}
                    onClick={closeMenu}
                    target={sub.newTab ? "_blank" : "_self"}
                    className={`block px-4 py-2 rounded-md transition-colors duration-300 
                      ${
                        pathname === sub.path
                          ? "text-[#0081c7] dark:text-[#4db8ff] font-semibold"
                          : "text-gray-700 dark:text-gray-300 hover:text-[#0081c7] dark:hover:text-[#4db8ff]"
                      }`}
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <Link
          href={path ?? "#"}
          onClick={closeMenu}
          target={newTab ? "_blank" : "_self"}
          className={`relative text-2xl font-bold transition-colors duration-300 
            ${
              isActive
                ? "text-[#0081c7] dark:text-[#4db8ff]"
                : "text-gray-700 dark:text-gray-300 hover:text-[#0081c7] dark:hover:text-[#4db8ff]"
            }`}
        >
          {title}
          {/* underline effect */}
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0081c7] dark:bg-[#4db8ff] transition-all duration-300
              group-hover:w-full
              ${isActive ? "w-full" : ""}`}
          />
        </Link>
      )}
    </li>
  );
};

export default MenuList;
