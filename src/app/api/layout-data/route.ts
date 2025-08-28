import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

const footerData = {
  name: "BCORE",
  tagline: "GANDHINAGAR MARATHON 2026",
  info: [
    {
      icon: "/images/footer/email-arrow.svg",
      link: "bcore.rru.ac.in",
      href: "https://bcore.rru.ac.in",
    },
    {
      icon: "/images/footer/Location.svg",
      link: "Bharat Centre of Olympic Research and Education",
      href: "https://maps.app.goo.gl/VHnEHZ7R1bh9k22B8",
    },
  ],
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Error 404", href: "/not-found" },
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "Twitter", href: "https://x.com/" },
  ],
  copyright: "© BCORE copyright 2025",
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
    MenuData,
  });
};
