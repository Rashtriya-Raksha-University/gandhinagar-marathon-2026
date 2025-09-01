"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

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
  isHorizontal = false,
  sticky = false,
}: {
  item: MenuItem;
  closeMenu: () => void;
  isHorizontal?: boolean;
  sticky?: boolean;
}) => {
  const { title, path, newTab, submenu } = item;
  const pathname = usePathname();
  const isActive = path ? pathname === path : false;
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const getTextStyles = () => {
    if (isHorizontal) {
      const textColor = sticky ? "text-black" : "text-white";
      const textColorHover = sticky
        ? "text-black/80 hover:text-black"
        : "text-white/90 hover:text-white";

      return {
        main: `text-3xl font-bold transition-colors duration-300 ${
          isActive ? `${textColor} text-3xl` : `${textColorHover} text-3xl`
        }`,
        submenu: `text-2xl font-bold transition-colors duration-300 ${
          sticky
            ? "text-black hover:text-primary"
            : "text-white hover:text-primary"
        }`,
        dropdownBg: sticky ? "bg-white" : "bg-black",
        underlineColor: sticky ? "bg-black" : "bg-white",
      };
    } else {
      return {
        main: `font-bold transition-colors duration-300 ${
          isActive
            ? "text-primary text-2xl"
            : "text-gray-700 hover:text-primary text-2xl"
        }`,
        submenu: "text-2xl font-bold text-gray-700 hover:text-primary",
        dropdownBg: "bg-white",
        underlineColor: "bg-primary",
      };
    }
  };

  const textStyles = getTextStyles();

  const handleSubmenuItemClick = () => {
    setOpen(false);
    closeMenu();
  };

  return (
    <li className="relative group">
      {submenu ? (
        <>
          <button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-2 ${textStyles.main}`}
          >
            {title}
            <span className="text-sm">{open ? "▲" : "▼"}</span>
          </button>
          {open && (
            <ul
              ref={dropdownRef}
              className={`absolute left-0 mt-2 ${
                textStyles.dropdownBg
              } shadow-lg rounded-lg p-2 space-y-2 z-50 ${
                isHorizontal ? "min-w-48" : "w-full"
              }`}
            >
              {submenu.map((sub) => (
                <li key={sub.id}>
                  <Link
                    href={sub.path ?? "#"}
                    onClick={handleSubmenuItemClick}
                    target={sub.newTab ? "_blank" : "_self"}
                    className={`block px-4 py-2 rounded-md transition-colors duration-300 ${
                      pathname === sub.path
                        ? isHorizontal && sticky
                          ? "text-black font-bold text-2xl"
                          : isHorizontal && !sticky
                          ? "text-white font-bold text-2xl"
                          : "text-primary font-bold text-2xl"
                        : textStyles.submenu
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
          className={`relative ${textStyles.main}`}
        >
          {title}
          {!isHorizontal && (
            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300
              group-hover:w-full
              ${isActive ? "w-full" : ""}`}
            />
          )}
          {isHorizontal && (
            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-0 ${
                textStyles.underlineColor
              } transition-all duration-300
              group-hover:w-full
              ${isActive ? "w-full" : ""}`}
            />
          )}
        </Link>
      )}
    </li>
  );
};

export default MenuList;
