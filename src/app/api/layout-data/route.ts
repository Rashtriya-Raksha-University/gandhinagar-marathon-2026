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
    title: "Donation",
    path: "/donation",
    newTab: false,
  },
  {
    id: 2,
    title: "Registration",
    path: "/register",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "General",
  //   path: "/general",
  //   newTab: false,
  // },
  {
    id: 2,
    title: "Races",
    newTab: false,
    submenu: [
      {
        id: 50,
        title: "Team Run",
        path: "/race/team-run",
        newTab: false,
      },
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
        title: "3KM",
        path: "/race/fun-run",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "About",
    path: "https://bcore.rru.ac.in/",
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
    { name: "Registration", href: "/register" },
    { name: "Home", href: "/" },
    { name: "About", href: "https://bcore.rru.ac.in/" },
    { name: "Donation", href: "/donation" },
    // { name: "General", href: "/general" },
    { name: "Races", href: "/race" },
    { name: "Contact", href: "/contact" },
  ],
  socialLinks: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/bcore_rru/?igsh=MXFxejQzbzlqbDNjeg%3D%3D#",
    },
    { name: "Twitter", href: "https://x.com/bcorerru" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/bharat-centre-of-olympic-research-and-education-bcore/",
    },
    { name: "Email", href: "mailto:bcorenightrun@rru.ac.in" },
    { name: "Phone", href: "tel:+916357436705" },
  ],
  policyLinks: [
    { name: "Eligibility Criteria", href: "/policies/eligibility-criteria" },
    { name: "Rules & Regulations", href: "/policies/rules-regulations" },
    { name: "Refund Policy", href: "/policies/refund" },
    { name: "Health & Safety", href: "/policies/health-safety" },
    { name: "Data Protection", href: "/policies/data-protection" },
    { name: "Accessibility", href: "/policies/accessibility" },
  ],

  copyright: "© BCORE copyright 2025",
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
    MenuData,
  });
};
