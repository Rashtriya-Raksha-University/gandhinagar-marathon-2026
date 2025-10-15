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
      {submenu ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className={`flex w-full items-center justify-between text-2xl font-semibold transition-colors duration-300 
              ${
                isActive
                  ? "text-[#0081c7] dark:text-[#4db8ff]"
                  : "text-gray-800 dark:text-gray-300 hover:text-[#0081c7] dark:hover:text-[#4db8ff]"
              }`}
          >
            {title}
            <span className="text-base">{open ? "▲" : "▼"}</span>
          </button>

          {/* Expanded submenu inside full overlay */}
          {open && (
            <ul className="mt-3 space-y-2 pl-4 border-l border-gray-300 dark:border-gray-700">
              {submenu.map((sub) => (
                <li key={sub.id}>
                  <Link
                    href={sub.path ?? "#"}
                    onClick={closeMenu}
                    target={sub.newTab ? "_blank" : "_self"}
                    className={`block py-1 text-lg transition-colors duration-300 
                      ${
                        pathname === sub.path
                          ? "text-[#0081c7] dark:text-[#4db8ff] font-semibold"
                          : "text-gray-600 dark:text-gray-400 hover:text-[#0081c7] dark:hover:text-[#4db8ff]"
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
          className={`block text-2xl font-semibold transition-colors duration-300 
            ${
              isActive
                ? "text-[#0081c7] dark:text-[#4db8ff]"
                : "text-gray-800 dark:text-gray-300 hover:text-[#0081c7] dark:hover:text-[#4db8ff]"
            }`}
        >
          {title}
        </Link>
      )}
    </li>
  );
};

export default MenuList;
