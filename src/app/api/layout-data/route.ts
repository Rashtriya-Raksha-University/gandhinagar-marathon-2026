import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 5,
    title: "General",
    path: "/general",
    newTab: false,
  },
  {
    id: 2,
    title: "Races",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Half Marathon",
        path: "/race/half-marathon",
        newTab: false,
      },
      {
        id: 52,
        title: "10 KM",
        path: "/race/ten-km",
        newTab: false,
      },
      {
        id: 53,
        title: "5 KM",
        path: "/race/five-km",
        newTab: false,
      },
      {
        id: 54,
        title: "Fun Run",
        path: "/race/fun-run",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
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
